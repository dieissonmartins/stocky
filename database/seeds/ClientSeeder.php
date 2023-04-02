<?php


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Insert some stuff
        DB::table('clients')->insert(
            array(
                'id' => 1,
                'name' => 'João dos Santos',
                'code' => 1,
                'email' => 'dieisson.martins.santos@gmail.com',
                'country' => 'Brasil',
                'city' => 'Belo Horizonte',
                'phone' => '12345678',
                'adresse' => 'Barreiro de cima',
                'tax_number' => NULL,
            )

        );
    }
}
