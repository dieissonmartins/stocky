<?php
namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends BaseController
{


    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getAccessToken(Request $request)
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

        $user = auth()->user();
        $tokenResult = $user->createToken('Access Token');
        $token = $tokenResult->token;

        $this->setCookie('Stocky_token', $tokenResult->accessToken);

        return response()->json([
            'Stocky_token' => $tokenResult->accessToken,
            'username' => Auth::User()->username,
            'status' => true,
        ]);
    }

    //--------------- Function Logout ----------------\\

    public function logout()
    {
        if (Auth::check()) {
            $user = Auth::user()->token();
            $user->revoke();
            $this->destroyCookie('Stocky_token');
            return response()->json('success');
        }

    }

}
