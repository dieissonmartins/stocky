<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Insert some stuff
        DB::table('users')->insert(
            array(
                'id' => 1,
                'firstname' => 'Dieisson',
                'lastname' => 'Martins dos Santos',
                'username' => 'dieissonmartins',
                'email' => 'dieisson.martins.santos@gmail.com',
                'password' => '$2y$10$IFj6SwqC0Sxrsiv4YkCt.OJv1UV4mZrWuyLoRG7qt47mseP9mJ58u',
                'avatar' => 'no_avatar.png',
                'phone' => '33988643983',
                'role_id' => 1,
                'statut' => 1,
                'is_all_warehouses' => 1,
            )
        );
    }
}
