<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Role;
use App\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Insert some stuff
        DB::table('roles')->insert(
            array([
                'id' => 1,
                'name' => 'Proprietário',
                'label' => 'Proprietário',
                'status' => 1,
                'description' => 'Proprietário',
            ])
        );
    }
}
