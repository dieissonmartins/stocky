<?php
namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends BaseController
{


    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function token(Request $request)
    {
        # valida campos
        $request->validate(['email' => 'required', 'password' => 'required']);

        # pega informacoes
        $credentials = request(['email', 'password']);

        $is_exists = Auth::attempt($credentials);

        if ($is_exists) {
            $userStatus = Auth::User()->statut;

            if ($userStatus === 0) {
                return response()->json([
                    'message' => 'Este usuário não está ativo',
                    'status' => 'NotActive',
                ]);
            }

        } else {
            return response()->json([
                'message' => 'Login incorreto',
                'status' => false,
            ]);
        }

        $token = auth()->attempt($credentials);

        $this->setCookie('_AUTH_TOKEN', $token);

        return $this->respondWithToken($token);
    }

    //--------------- Function Logout ----------------\\

    public function logout()
    {
        if (Auth::check()) {
            $user = Auth::user()->token();
            $user->revoke();
            $this->destroyCookie('_AUTH_TOKEN');
            return response()->json('success');
        }

    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return JsonResponse
     */
    protected function respondWithToken(string $token): JsonResponse
    {
        return response()->json([
            '_AUTH_TOKEN' => $token,
            'username' => Auth::User()->username,
            'expires_in' => auth()->factory()->getTTL() * 60,
            'status' => true,
        ]);
    }

}
