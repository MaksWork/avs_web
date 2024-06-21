import React from 'react';
import './SelectPak.scss'

const pako = [
    {id: 1,name: 'Paku Skapis TC Jugla', adress: 'Juglas krastmala 2, LV-1024'},
    {id: 2,name: 'Paku Skapis Rimi Saharova', adress: 'Andreja Saharova iela 23a, LV-1082'},
    {id: 3,name: 'Paku Skapis Rimi Valdemārs', adress: 'Krišjāņa Valdemāra iela 112, LV-1013	'},
    {id: 4,name: 'Paku Skapis TC Spice', adress: 'Lielirbes iela 29, LV-1046'},
    {id: 5,name: 'Paku Skapis TC Dole', adress: 'Maskavas iela 357, LV-1063'},
    {id: 6,name: 'Paku Skapis Maxima Deglava', adress: 'A. Deglava iela 67, LV-1082'},
    {id: 7,name: 'Paku Skapis TC Damme', adress: 'Kurzemes prospekts 1a, LV-1067	'},
    {id: 8,name: 'Paku Skapis TC Alfa', adress: 'Brīvības gatve 372, LV-1006'},
    {id: 9,name: 'Paku Skapis TC Olimpia', adress: 'Āzenes iela 5, LV-1048'},
    {id: 10,name: 'Paku Skapis Rimi Biķernieku	', adress: 'Biķernieku iela 160, LV-1079	'},
    {id: 11,name: 'Paku Skapis Mego Lidoņu', adress: 'Lidoņu ielu 27 k-1, LV-1055'},
    {id: 12,name: 'Paku Skapis TC Domina', adress: 'Ieriķu iela 3, LV-1084'},
    {id: 13,name: 'Paku Skapis Rimi P.Brieža', adress: 'Pulkveža Brieža iela 33a, LV-1045'},
    {id: 14,name: 'Paku Skapis Maxima X Vecmilgrāvis', adress: 'Augusta Dombrovska iela 74, LV-1015'},
    {id: 15,name: 'Paku Skapis Rimi Āgenskalns', adress: 'Mārupes iela 10a, LV-1002'},
    {id: 16,name: 'Paku Skapis Rimi Gramzdas', adress: 'Imantas 15.līnija 7, LV-1029'},
    {id: 17,name: 'Paku Skapis Jaunā Teika', adress: 'Gustava Zemgala gatve 78, LV-1039'},
    {id: 18,name: 'Paku Skapis Rimi Mini Anniņmuiža', adress: 'Anniņmuižas bulvāris 90, LV-1029'},
    {id: 19,name: 'Paku Skapis TC Akropole', adress: 'Maskavas iela 257, LV-1019'},
    {id: 20,name: 'Paku Skapis TC Zoom', adress: 'Maskavas iela 400, LV-1063'},
    {id: 21,name: 'Paku Skapis Circle K Iļģuciems', adress: 'Dzirciema iela 40, LV-1007'},
    {id: 22,name: 'Paku Skapis Rimi Super Dzelzavas', adress: 'Dzelzavas iela 78, LV-1082'},
    {id: 23,name: 'Paku Skapis TC Minska', adress: 'Nīcgales iela 2, LV-1035'},
    {id: 24,name: 'Paku Skapis Rimi Briāna', adress: 'Krišjāņa Valdemāra iela 62a, LV-1013'},
    {id: 25,name: 'Paku Skapis Rimi Mini Vienības', adress: 'Vienības gatve 103, LV-1058'},
    {id: 26,name: 'Paku Skapis Mego Bolderāja', adress: 'Gobas iela 13, LV-1016'},
    {id: 27,name: 'Paku Skapis Maxima Mūkusalas', adress: 'Mūkusalas iela 73, LV-1004'},
    {id: 28,name: 'Paku Skapis TC Mego Zepniekkalns', adress: 'Dižozolu iela 2, LV-1058'},
    {id: 29,name: 'Paku Skapis Mego Biķernieku', adress: 'Biķernieku iela 16a, LV-1039'},
    {id: 30,name: 'Paku Skapis TC Gaiļezers', adress: 'Gaiļezera iela 8, LV-1079'},
    {id: 31,name: 'Paku Skapis Mego Prūšu', adress: 'Prūšu iela 2, LV-1057'},
    {id: 32,name: 'Paku Skapis Rimi Stirnu', adress: 'Stirnu iela 26, LV-1084'},
    {id: 33,name: 'Paku Skapis Rimi Mini Brīvības', adress: 'Brīvības gatve 404, LV-1024'},
    {id: 34,name: 'Paku Skapis Rimi Anniņmuižas', adress: 'Anniņmuižas bulvāris 40a, LV-1069'},
    {id: 35,name: 'Paku Skapis Rimi Aleja', adress: 'Vienības gatve 194a, LV-1058'},
    {id: 36,name: 'Paku Skapis Mego Graudu', adress: 'Graudu iela 10, LV-1058'},
    {id: 37,name: 'Paku Skapis Rimi Kalnciema', adress: 'Kalnciema iela 41, LV-1046'},
    {id: 38,name: 'Paku Skapis Maxima X Āgenskalns', adress: 'Pilsoņu iela 1 k-1, LV-1002'},
    {id: 39,name: 'Paku Skapis Brīvības 44', adress: 'Brīvības iela 44, LV-1011'},
    {id: 40,name: 'Paku Skapis TC Venta', adress: 'Zolitūdes iela 34, LV-1029'},
    {id: 41,name: 'Paku Skapis Rimi Deglava', adress: 'Augusta Deglava iela 110, LV-1082'},
    {id: 42,name: 'Paku Skapis Rimi Tilta', adress: 'Tilta iela 32, LV-1005'},
    {id: 43,name: 'Paku Skapis Rimi Mīlgrāvis', adress: 'Mīlgrāvja iela 14, LV-1034'},
    {id: 44,name: 'Paku Skapis Maxima XX Rusova', adress: 'Rusova iela 1, LV-1026'},
    {id: 45,name: 'Paku Skapis Maxima XXX Grostonas', adress: 'Grostonas iela 1, LV-1013'},
    {id: 46,name: 'Paku Skapis Rimi Vecmīlgrāvis', adress: 'Augusta Dombrovska iela 23, LV-1015'},
    {id: 47,name: 'Paku Skapis Brīvības 78', adress: 'Brīvības iela 78a, LV-1001'},
    {id: 48,name: 'Paku Skapis Maxima X Parādes', adress: 'Parādes iela 8, LV-1016'},
    {id: 49,name: 'Paku Skapis TC Rīga Plaza', adress: 'Mūkusalas iela 71, LV-1004'},
    {id: 50,name: 'Paku Skapis TC Mols', adress: 'Krasta iela 46, LV-1003'},
    {id: 51,name: 'Paku Skapis Maxima XX Saharova', adress: 'Andreja Saharova iela 20a, LV-1021'},
    {id: 52,name: 'Paku Skapis TC Barona Centrs', adress: 'Krišjāņa Barona iela 46, LV-1011'},
    {id: 53,name: 'Paku Skapis Mego Kurzemes', adress: 'Kurzemes prospekts 132a, LV-1069'},
    {id: 54,name: 'Paku Skapis Neste Dambja', adress: 'Dambja iela 10, LV-1005'},
    {id: 55,name: 'Paku Skapis TC Bērnu Pasaule', adress: 'Matīsa iela 25, LV-1001'},
    {id: 56,name: 'Paku Skapis Circle K Mežciems', adress: 'Biķernieku iela 121a, LV-1021'},
    {id: 57,name: 'Paku Skapis Circle K Deglava', adress: 'Augusta Deglava iela 164a, LV-1021'},
    {id: 58,name: 'Paku Skapis Maxima XX Nīcgales', adress: 'Nīcgales iela 46a, LV-1035'},
    {id: 59,name: 'Paku Skapis Maxima X Ulbrokas', adress: 'Ulbrokas iela 4, LV-1021'},
    {id: 60,name: 'Paku Skapis Circle K Brīvības/Cēsu', adress: 'Brīvības iela 176a, LV-1012'},
    {id: 61,name: 'Paku Skapis Circle K Dzelzavas', adress: 'Dzelzavas iela 14, LV-1084'},
    {id: 62,name: 'Paku Skapis TC Mevi Līvciema', adress: 'Līvciema iela 46, LV-1058'},
    {id: 63,name: 'Paku Skapis Circle K Imanta', adress: 'Anniņmuižas bulvāris 25a, LV-1067'},
    {id: 64,name: 'Paku Skapis Mego Saharova 2', adress: 'Andreja Saharova iela 2, LV-1021'},
    {id: 65,name: 'Paku Skapis Mego Kleistu', adress: 'Kleistu iela 9, LV-1067'},
    {id: 66,name: 'Paku Skapis Mēbeļu Nams', adress: 'Dzelzavas iela 72, LV-1082'},
    {id: 67,name: 'Paku Skapis Circle K Muitas', adress: 'Muitas iela 4, LV-1010'},
    {id: 68,name: 'Paku Skapis Circle K Valdemāra', adress: 'Krišjāna Valdemāra iela 104, LV-1013'},
    {id: 69,name: 'Paku Skapis Circle K Teika', adress: 'Brīvības gatve 265, LV-1006'},
    {id: 70,name: 'Paku Skapis Circle K Botānika', adress: 'Jūrmalas gatve 5a, LV-1007'},
    {id: 71,name: 'Paku Skapis Circle K Pērnavas', adress: 'Pērnavas iela 7, LV-1012'},
    {id: 72,name: 'Paku Skapis Circle K Kurbada', adress: 'Kurbada iela 8, LV-1009'},
    {id: 73,name: 'Paku Skapis DPD', adress: 'Uriekstes iela 8a, LV-1005'},
    {id: 74,name: 'Paku Skapis VIRŠI Arkādijs', adress: 'Uzvaras bulvāris 16, LV-1048'},
    {id: 75,name: 'Paku Skapis Galleria Riga', adress: 'Dzirnavu iela 67, LV-1011'},
    {id: 76,name: 'Paku Skapis Miera 2', adress: 'Miera iela 2, LV-1001'},
    {id: 77,name: 'Paku Skapis Drogas Jugla', adress: 'Brīvības gatve 432, LV-1024'},
    {id: 78,name: 'Paku Skapis Hipokrāta', adress: 'Hipokrāta iela 26, LV-1079'},
    {id: 79,name: 'Paku Skapis Maxima X Jugla', adress: 'Juglas iela 45, LV-1064'},
    {id: 80,name: 'Paku Skapis VIRŠI Katrīnas dambis', adress: 'Katrīnas dambis 35,LV-1045'},
    {id: 81,name: 'Paku Skapis Ēbelmuiža', adress: 'Valdeķu iela 39, LV-1058'},
    {id: 82,name: 'Paku Skapis TOP Zalves', adress: 'Zalves iela 46a, LV-1046'},
    {id: 83,name: 'Paku Skapis Rimi Vaidelotes', adress: 'Vaidelotes iela 11a, LV-1055'}
]


const SelectPak = () => {
    return(
        <select className='pak_container'>
            <option selected disabled hidden>Выберите пакомат</option>
            {pako.map((p) =>{
                return(
                    <option key={p.id}>{p.name}</option>
                )
            })}
        </select>
    );
}

export default SelectPak;