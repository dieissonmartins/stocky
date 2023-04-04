<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Insert some stuff
        DB::table('settings')->insert(
            array(
                'id' => 1,
                'email' => 'dieisson.martins.santos@gmail.com',
                'currency_id' => 1,
                'client_id' => 1,
                'sms_gateway' => 1,
                'is_invoice_footer' => 0,
                'invoice_footer' => Null,
                'warehouse_id' => Null,
                'CompanyName' => 'Dieisson Dev',
                'CompanyPhone' => '33988643983',
                'CompanyAdress' => 'Rua Antônio de Souza –  Miramar (Barreiro)  Belo Horizonte – MG  | CEP: 30642540',
                'footer' => 'Dieisson Dev',
                'developed_by' => 'Dieisson Martins',
                'logo' => 'logo-default.png',
            )

        );
    }
}
