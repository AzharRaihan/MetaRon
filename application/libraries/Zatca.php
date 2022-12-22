<?php defined('BASEPATH') OR exit('No direct script access allowed');

/*
 *  ==============================================================================
 *  Author  : Mian Saleem
 *  Email   : saleem@tecdiary.com
 *  For     : ESC/POS Print Driver for PHP
 *  License : MIT License
 *  ==============================================================================
 */
require_once APPPATH .'libraries/vendor/autoload.php';
use salla\zatca\GenerateQrCode;
use salla\zatca\Tags\InvoiceDate;
use salla\zatca\Tags\InvoiceTaxAmount;
use salla\zatca\Tags\InvoiceTotalAmount;
use salla\zatca\Tags\Seller;
use salla\zatca\Tags\TaxNumber;

class Zatca
{


    public function __construct() {

    }
    public function generate(){
        // data:image/png;base64, .........
        $displayQRCodeAsBase64 = GenerateQrCode::fromArray([
            new Seller('Salla'), // seller name
            new TaxNumber('1234567891'), // seller tax number
            new InvoiceDate('2021-07-12T14:25:09Z'), // invoice date as Zulu ISO8601 @see https://en.wikipedia.org/wiki/ISO_8601
            new InvoiceTotalAmount('100.00'), // invoice total amount
            new InvoiceTaxAmount('15.00') // invoice tax amount
        ])->render();

        echo $displayQRCodeAsBase64;exit;
    }


}
