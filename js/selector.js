// ========================================
// GLOBAL VARIABLES
// ========================================
// NOTA: Esta lista se generará automáticamente cuando se suban las fotos
// Puedes usar el script generar_lista_fotos.py para actualizarla
const photos = [
    'imagenes/DJI_20251227160545_0430_D.webp',
    'imagenes/DJI_20251227160550_0431_D.webp',
    'imagenes/DJI_20251227160555_0432_D.webp',
    'imagenes/DJI_20251227160558_0433_D.webp',
    'imagenes/DJI_20251227160600_0434_D.webp',
    'imagenes/DJI_20251227160603_0435_D.webp',
    'imagenes/DJI_20251227160626_0436_D.webp',
    'imagenes/DJI_20251227160628_0437_D.webp',
    'imagenes/DJI_20251227160632_0438_D.webp',
    'imagenes/DJI_20251227160657_0439_D.webp',
    'imagenes/DJI_20251227160659_0440_D.webp',
    'imagenes/DJI_20251227160712_0441_D.webp',
    'imagenes/DJI_20251227160715_0442_D.webp',
    'imagenes/DJI_20251227160729_0443_D.webp',
    'imagenes/DJI_20251227160732_0444_D.webp',
    'imagenes/DJI_20251227160734_0445_D.webp',
    'imagenes/DJI_20251227160745_0446_D.webp',
    'imagenes/DJI_20251227160749_0447_D.webp',
    'imagenes/DJI_20251227160816_0448_D.webp',
    'imagenes/DJI_20251227160820_0449_D.webp',
    'imagenes/DJI_20251227160900_0450_D.webp',
    'imagenes/DJI_20251227160904_0451_D.webp',
    'imagenes/DJI_20251227160916_0452_D.webp',
    'imagenes/DJI_20251227160920_0453_D.webp',
    'imagenes/DJI_20251227161632_0458_D.webp',
    'imagenes/DJI_20251227161634_0459_D.webp',
    'imagenes/DJI_20251227161637_0460_D.webp',
    'imagenes/DJI_20251227161639_0461_D.webp',
    'imagenes/DJI_20251227161643_0462_D.webp',
    'imagenes/DJI_20251227161649_0463_D.webp',
    'imagenes/DJI_20251227161659_0464_D.webp',
    'imagenes/DJI_20251227161740_0465_D.webp',
    'imagenes/DJI_20251227161744_0466_D.webp',
    'imagenes/DJI_20251227161748_0467_D.webp',
    'imagenes/DJI_20251227161750_0468_D.webp',
    'imagenes/DJI_20251227161804_0469_D.webp',
    'imagenes/DJI_20251227161806_0470_D.webp',
    'imagenes/DJI_20251227161809_0471_D.webp',
    'imagenes/DJI_20251227161810_0472_D.webp',
    'imagenes/DJI_20251227161815_0473_D.webp',
    'imagenes/DJI_20251227161818_0474_D.webp',
    'imagenes/DJI_20251227161830_0475_D.webp',
    'imagenes/DJI_20251227161834_0476_D.webp',
    'imagenes/DJI_20251227161903_0477_D.webp',
    'imagenes/DJI_20251227161927_0478_D.webp',
    'imagenes/DJI_20251227161931_0479_D.webp',
    'imagenes/DJI_20251227161936_0480_D.webp',
    'imagenes/DJI_20251227161938_0481_D.webp',
    'imagenes/DJI_20251227161940_0482_D.webp',
    'imagenes/DJI_20251227161942_0483_D.webp',
    'imagenes/DJI_20251227162129_0484_D.webp',
    'imagenes/DJI_20251227162135_0485_D.webp',
    'imagenes/DJI_20251227162138_0486_D.webp',
    'imagenes/DJI_20251227162141_0487_D.webp',
    'imagenes/DJI_20251227162144_0488_D.webp',
    'imagenes/DJI_20251227162146_0489_D.webp',
    'imagenes/DJI_20251227162148_0490_D.webp',
    'imagenes/DJI_20251227162151_0491_D.webp',
    'imagenes/DJI_20251227162329_0492_D.webp',
    'imagenes/DJI_20251227162335_0493_D.webp',
    'imagenes/DJI_20251227162338_0494_D.webp',
    'imagenes/DJI_20251227162346_0495_D.webp',
    'imagenes/DJI_20251227162347_0496_D.webp',
    'imagenes/DJI_20251227162349_0497_D.webp',
    'imagenes/DJI_20251227162439_0498_D.webp',
    'imagenes/DJI_20251227162441_0499_D.webp',
    'imagenes/DJI_20251227162443_0500_D.webp',
    'imagenes/DJI_20251227162448_0501_D.webp',
    'imagenes/DJI_20251227162455_0502_D.webp',
    'imagenes/DJI_20251227162457_0503_D.webp',
    'imagenes/DJI_20251227162502_0504_D.webp',
    'imagenes/DJI_20251227162539_0505_D.webp',
    'imagenes/DJI_20251227162540_0506_D.webp',
    'imagenes/DJI_20251227162547_0507_D.webp',
    'imagenes/DJI_20251227162551_0508_D.webp',
    'imagenes/DJI_20251227162601_0509_D.webp',
    'imagenes/DJI_20251227162605_0510_D.webp',
    'imagenes/DJI_20251227162608_0511_D.webp',
    'imagenes/DJI_20251227170615_0512_D.webp',
    'imagenes/DJI_20251227181143_0517_D.webp',
    'imagenes/DJI_20251227181147_0518_D.webp',
    'imagenes/DJI_20251227181157_0519_D.webp',
    'imagenes/DJI_20251227181204_0520_D.webp',
    'imagenes/DJI_20251227181207_0521_D.webp',
    'imagenes/DJI_20251227181210_0522_D.webp',
    'imagenes/DJI_20251227181215_0523_D.webp',
    'imagenes/DJI_20251227181358_0524_D.webp',
    'imagenes/DJI_20251227221447_0540_D.webp',
    'imagenes/DJI_20251227221451_0541_D.webp',
    'imagenes/DJI_20251227_163440_045.webp',
    'imagenes/DJI_20251227_163445_041.webp',
    'imagenes/DJI_20251227_163447_560.webp',
    'imagenes/DJI_20251227_163455_109.webp',
    'imagenes/DJI_20251227_163458_063.webp',
    'imagenes/DJI_20251227_163512_583.webp',
    'imagenes/DJI_20251227_163515_795.webp',
    'imagenes/DJI_20251227_163518_915.webp',
    'imagenes/DJI_20251227_163520_831.webp',
    'imagenes/DJI_20251227_163533_390.webp',
    'imagenes/DJI_20251227_163539_614.webp',
    'imagenes/DJI_20251227_163541_590.webp',
    'imagenes/DJI_20251227_163917_529.webp',
    'imagenes/DJI_20251227_163923_301.webp',
    'imagenes/DJI_20251227_163928_100.webp',
    'imagenes/DJI_20251227_171627_603.webp',
    'imagenes/DJI_20251227_171631_557.webp',
    'imagenes/DJI_20251227_171636_956.webp',
    'imagenes/DJI_20251227_171642_147.webp',
    'imagenes/DJI_20251227_171644_667.webp',
    'imagenes/DJI_20251227_171650_304.webp',
    'imagenes/DJI_20251227_171653_936.webp',
    'imagenes/DJI_20251227_171702_514.webp',
    'imagenes/DJI_20251227_171709_957.webp',
    'imagenes/DJI_20251227_171712_372.webp',
    'imagenes/DJI_20251227_171715_057.webp',
    'imagenes/DJI_20251227_171758_599.webp',
    'imagenes/DJI_20251227_171801_030.webp',
    'imagenes/DJI_20251227_171826_532.webp',
    'imagenes/DJI_20251227_171836_430.webp',
    'imagenes/DJI_20251227_171850_470.webp',
    'imagenes/DJI_20251227_171857_372.webp',
    'imagenes/DJI_20251227_171900_102.webp',
    'imagenes/DJI_20251227_171911_065.webp',
    'imagenes/DJI_20251227_171913_675.webp',
    'imagenes/DJI_20251227_171918_703.webp',
    'imagenes/DJI_20251227_171941_068.webp',
    'imagenes/DJI_20251227_171953_803.webp',
    'imagenes/DJI_20251227_171958_585.webp',
    'imagenes/DJI_20251227_172000_654.webp',
    'imagenes/DJI_20251227_172013_030.webp',
    'imagenes/DJI_20251227_172047_200.webp',
    'imagenes/DJI_20251227_172050_456.webp',
    'imagenes/DJI_20251227_172208_744.webp',
    'imagenes/DJI_20251227_172212_373.webp',
    'imagenes/DJI_20251227_172217_204.webp',
    'imagenes/DJI_20251227_172434_559.webp',
    'imagenes/DJI_20251227_172528_708.webp',
    'imagenes/DJI_20251227_172531_305.webp',
    'imagenes/DJI_20251227_181404_946.webp',
    'imagenes/DJI_20251227_181409_131.webp',
    'imagenes/DJI_20251227_181438_156.webp',
    'imagenes/DJI_20251227_181447_156.webp',
    'imagenes/DJI_20251227_181450_667.webp',
    'imagenes/DJI_20251227_181453_516.webp',
    'imagenes/DJI_20251227_181458_571.webp',
    'imagenes/DJI_20251227_181505_637.webp',
    'imagenes/DJI_20251227_181508_306.webp',
    'imagenes/DJI_20251227_181646_362.webp',
    'imagenes/DJI_20251227_181737_652.webp',
    'imagenes/DJI_20251227_181838_418.webp',
    'imagenes/DJI_20251227_181846_396.webp',
    'imagenes/DJI_20251227_182055_187.webp',
    'imagenes/DJI_20251227_182102_745.webp',
    'imagenes/DJI_20251227_182105_357.webp',
    'imagenes/DJI_20251227_182110_711.webp',
    'imagenes/DJI_20251227_182118_076.webp',
    'imagenes/DJI_20251227_182123_911.webp',
    'imagenes/DJI_20251227_182128_847.webp',
    'imagenes/DJI_20251227_182132_011.webp',
    'imagenes/DJI_20251227_182138_175.webp',
    'imagenes/DJI_20251227_182144_580.webp',
    'imagenes/DJI_20251227_182214_594.webp',
    'imagenes/DJI_20251227_182237_018.webp',
    'imagenes/DJI_20251227_182243_289.webp',
    'imagenes/DJI_20251227_182246_258.webp',
    'imagenes/DJI_20251227_182253_038.webp',
    'imagenes/DJI_20251227_182302_533.webp',
    'imagenes/DJI_20251227_182306_673.webp',
    'imagenes/DJI_20251227_182313_482.webp',
    'imagenes/DJI_20251227_182322_483.webp',
    'imagenes/DJI_20251227_182459_021.webp',
    'imagenes/DJI_20251227_182503_806.webp',
    'imagenes/DJI_20251227_182507_046.webp',
    'imagenes/DJI_20251227_182514_980.webp',
    'imagenes/DJI_20251227_182517_632.webp',
    'imagenes/DJI_20251227_182637_374.webp',
    'imagenes/DJI_20251227_182639_802.webp',
    'imagenes/DJI_20251227_182655_268.webp',
    'imagenes/DJI_20251227_182707_357.webp',
    'imagenes/DJI_20251227_182726_917.webp',
    'imagenes/DJI_20251227_182733_621.webp',
    'imagenes/DJI_20251227_182736_681.webp',
    'imagenes/DJI_20251227_182840_519.webp',
    'imagenes/DJI_20251227_182842_649.webp',
    'imagenes/DJI_20251227_182900_528.webp',
    'imagenes/DJI_20251227_182908_343.webp',
    'imagenes/DJI_20251227_182924_904.webp',
    'imagenes/DJI_20251227_182929_613.webp',
    'imagenes/DJI_20251227_183016_113.webp',
    'imagenes/DJI_20251227_183021_137.webp',
    'imagenes/DJI_20251227_183150_116.webp',
    'imagenes/DJI_20251227_183154_315.webp',
    'imagenes/DJI_20251227_183201_650.webp',
    'imagenes/DJI_20251227_183206_136.webp',
    'imagenes/DJI_20251227_183401_118.webp',
    'imagenes/DJI_20251227_183404_433.webp',
    'imagenes/DJI_20251227_183611_978.webp',
    'imagenes/DJI_20251227_183619_448.webp',
    'imagenes/DJI_20251227_183622_913.webp',
    'imagenes/DJI_20251227_183812_017.webp',
    'imagenes/DJI_20251227_183814_604.webp',
    'imagenes/DJI_20251227_184054_838.webp',
    'imagenes/DJI_20251227_184057_268.webp',
    'imagenes/DJI_20251227_184101_272.webp',
    'imagenes/DJI_20251227_184105_818.webp',
    'imagenes/DJI_20251227_184115_686.webp',
    'imagenes/DJI_20251227_184123_562.webp',
    'imagenes/DJI_20251227_184125_662.webp',
    'imagenes/DJI_20251227_184212_386.webp',
    'imagenes/DJI_20251227_184218_866.webp',
    'imagenes/DJI_20251227_184225_691.webp',
    'imagenes/DJI_20251227_184237_152.webp',
    'imagenes/DJI_20251227_184241_263.webp',
    'imagenes/DJI_20251227_184246_182.webp',
    'imagenes/DJI_20251227_184307_438.webp',
    'imagenes/DJI_20251227_184310_213.webp',
    'imagenes/DJI_20251227_184312_912.webp',
    'imagenes/DJI_20251227_184317_727.webp',
    'imagenes/DJI_20251227_184328_677.webp',
    'imagenes/DJI_20251227_184334_032.webp',
    'imagenes/DJI_20251227_184341_713.webp',
    'imagenes/DJI_20251227_184356_248.webp',
    'imagenes/DJI_20251227_184416_152.webp',
    'imagenes/DJI_20251227_184419_182.webp',
    'imagenes/DJI_20251227_184423_891.webp',
    'imagenes/DJI_20251227_184453_968.webp',
    'imagenes/DJI_20251227_184456_638.webp',
    'imagenes/DJI_20251227_184500_164.webp',
    'imagenes/DJI_20251227_184503_390.webp',
    'imagenes/DJI_20251227_184506_208.webp',
    'imagenes/DJI_20251227_184509_960.webp',
    'imagenes/DJI_20251227_184513_603.webp',
    'imagenes/DJI_20251227_184520_503.webp',
    'imagenes/DJI_20251227_184529_774.webp',
    'imagenes/DJI_20251227_184532_429.webp',
    'imagenes/DJI_20251227_184543_214.webp',
    'imagenes/DJI_20251227_184553_983.webp',
    'imagenes/DJI_20251227_184556_082.webp',
    'imagenes/DJI_20251227_184559_233.webp',
    'imagenes/DJI_20251227_191003_887.webp',
    'imagenes/DJI_20251227_191007_110.webp',
    'imagenes/DJI_20251227_191013_485.webp',
    'imagenes/DJI_20251227_191020_220.webp',
    'imagenes/DJI_20251227_191023_415.webp',
    'imagenes/DJI_20251227_191027_584.webp',
    'imagenes/DJI_20251227_191033_675.webp',
    'imagenes/DJI_20251227_191040_049.webp',
    'imagenes/DJI_20251227_191046_245.webp',
    'imagenes/DJI_20251227_191100_180.webp',
    'imagenes/DJI_20251227_191144_055.webp',
    'imagenes/DJI_20251227_191148_106.webp',
    'imagenes/DJI_20251227_191151_766.webp',
    'imagenes/DJI_20251227_191715_941.webp',
    'imagenes/DJI_20251227_191757_147.webp',
    'imagenes/DJI_20251227_191801_946.webp',
    'imagenes/DJI_20251227_191813_243.webp',
    'imagenes/DJI_20251227_191817_745.webp',
    'imagenes/DJI_20251227_191824_823.webp',
    'imagenes/DJI_20251227_191830_733.webp',
    'imagenes/DJI_20251227_191844_969.webp',
    'imagenes/DJI_20251227_191855_379.webp',
    'imagenes/DJI_20251227_191909_509.webp',
    'imagenes/DJI_20251227_191922_755.webp',
    'imagenes/DJI_20251227_191928_468.webp',
    'imagenes/DJI_20251227_191930_943.webp',
    'imagenes/DJI_20251227_191935_715.webp',
    'imagenes/DJI_20251227_191938_355.webp',
    'imagenes/DJI_20251227_191947_970.webp',
    'imagenes/DJI_20251227_191953_190.webp',
    'imagenes/DJI_20251227_191957_975.webp',
    'imagenes/DJI_20251227_192002_911.webp',
    'imagenes/DJI_20251227_192006_030.webp',
    'imagenes/DJI_20251227_192020_805.webp',
    'imagenes/DJI_20251227_192023_970.webp',
    'imagenes/DJI_20251227_192027_255.webp',
    'imagenes/DJI_20251227_192034_222.webp',
    'imagenes/DJI_20251227_192043_186.webp',
    'imagenes/DJI_20251227_192052_980.webp',
    'imagenes/DJI_20251227_192101_500.webp',
    'imagenes/DJI_20251227_192111_145.webp',
    'imagenes/DJI_20251227_192119_065.webp',
    'imagenes/DJI_20251227_192126_851.webp',
    'imagenes/DJI_20251227_192130_196.webp',
    'imagenes/DJI_20251227_192151_691.webp',
    'imagenes/DJI_20251227_192153_805.webp',
    'imagenes/DJI_20251227_192158_846.webp',
    'imagenes/DJI_20251227_192211_053.webp',
    'imagenes/DJI_20251227_192214_911.webp',
    'imagenes/DJI_20251227_192220_176.webp',
    'imagenes/DJI_20251227_192228_274.webp',
    'imagenes/DJI_20251227_192241_774.webp',
    'imagenes/DJI_20251227_192248_871.webp',
    'imagenes/DJI_20251227_192300_332.webp',
    'imagenes/DJI_20251227_192303_256.webp',
    'imagenes/DJI_20251227_192316_696.webp',
    'imagenes/DJI_20251227_192425_698.webp',
    'imagenes/DJI_20251227_192450_344.webp',
    'imagenes/DJI_20251227_192507_863.webp',
    'imagenes/DJI_20251227_192533_605.webp',
    'imagenes/DJI_20251227_192548_950.webp',
    'imagenes/DJI_20251227_192551_921.webp',
    'imagenes/DJI_20251227_192557_425.webp',
    'imagenes/DJI_20251227_192606_065.webp',
    'imagenes/DJI_20251227_192609_875.webp',
    'imagenes/DJI_20251227_192612_124.webp',
    'imagenes/DJI_20251227_192626_120.webp',
    'imagenes/DJI_20251227_192630_170.webp',
    'imagenes/DJI_20251227_192632_960.webp',
    'imagenes/DJI_20251227_192636_199.webp',
    'imagenes/DJI_20251227_192639_110.webp',
    'imagenes/DJI_20251227_192642_499.webp',
    'imagenes/DJI_20251227_192651_245.webp',
    'imagenes/DJI_20251227_192658_100.webp',
    'imagenes/DJI_20251227_192705_165.webp',
    'imagenes/DJI_20251227_192712_558.webp',
    'imagenes/DJI_20251227_192717_495.webp',
    'imagenes/DJI_20251227_192723_720.webp',
    'imagenes/DJI_20251227_192740_940.webp',
    'imagenes/DJI_20251227_192755_100.webp',
    'imagenes/DJI_20251227_192759_060.webp',
    'imagenes/DJI_20251227_192802_360.webp',
    'imagenes/DJI_20251227_192805_240.webp',
    'imagenes/DJI_20251227_192807_820.webp',
    'imagenes/DJI_20251227_192810_415.webp',
    'imagenes/DJI_20251227_192813_760.webp',
    'imagenes/DJI_20251227_192833_500.webp',
    'imagenes/DJI_20251227_192835_795.webp',
    'imagenes/DJI_20251227_192838_270.webp',
    'imagenes/DJI_20251227_192840_820.webp',
    'imagenes/DJI_20251227_192849_535.webp',
    'imagenes/DJI_20251227_192855_068.webp',
    'imagenes/DJI_20251227_192857_860.webp',
    'imagenes/DJI_20251227_192906_483.webp',
    'imagenes/DJI_20251227_192909_005.webp',
    'imagenes/DJI_20251227_192912_650.webp',
    'imagenes/DJI_20251227_192921_020.webp',
    'imagenes/DJI_20251227_192925_115.webp',
    'imagenes/DJI_20251227_192928_128.webp',
    'imagenes/DJI_20251227_192936_546.webp',
    'imagenes/DJI_20251227_192938_915.webp',
    'imagenes/DJI_20251227_192947_466.webp',
    'imagenes/DJI_20251227_192951_873.webp',
    'imagenes/DJI_20251227_192957_845.webp',
    'imagenes/DJI_20251227_193033_078.webp',
    'imagenes/DJI_20251227_193035_177.webp',
    'imagenes/DJI_20251227_193038_072.webp',
    'imagenes/DJI_20251227_193041_930.webp',
    'imagenes/DJI_20251227_193046_070.webp',
    'imagenes/DJI_20251227_193048_379.webp',
    'imagenes/DJI_20251227_193052_341.webp',
    'imagenes/DJI_20251227_193058_325.webp',
    'imagenes/DJI_20251227_193110_909.webp',
    'imagenes/DJI_20251227_193114_150.webp',
    'imagenes/DJI_20251227_193116_549.webp',
    'imagenes/DJI_20251227_193131_505.webp',
    'imagenes/DJI_20251227_193134_564.webp',
    'imagenes/DJI_20251227_193143_624.webp',
    'imagenes/DJI_20251227_193155_938.webp',
    'imagenes/DJI_20251227_193158_565.webp',
    'imagenes/DJI_20251227_193208_646.webp',
    'imagenes/DJI_20251227_193212_409.webp',
    'imagenes/DJI_20251227_193214_704.webp',
    'imagenes/DJI_20251227_193249_939.webp',
    'imagenes/DJI_20251227_193255_340.webp',
    'imagenes/DJI_20251227_193325_655.webp',
    'imagenes/DJI_20251227_193332_465.webp',
    'imagenes/DJI_20251227_193335_390.webp',
    'imagenes/DJI_20251227_193337_685.webp',
    'imagenes/DJI_20251227_193343_865.webp',
    'imagenes/DJI_20251227_193351_935.webp',
    'imagenes/DJI_20251227_193406_456.webp',
    'imagenes/DJI_20251227_193414_390.webp',
    'imagenes/DJI_20251227_193424_800.webp',
    'imagenes/DJI_20251227_193447_121.webp',
    'imagenes/DJI_20251227_193519_401.webp',
    'imagenes/DJI_20251227_193525_491.webp',
    'imagenes/DJI_20251227_193539_892.webp',
    'imagenes/DJI_20251227_193544_091.webp',
    'imagenes/DJI_20251227_193547_932.webp',
    'imagenes/DJI_20251227_193559_436.webp',
    'imagenes/DJI_20251227_193621_352.webp',
    'imagenes/DJI_20251227_193644_542.webp',
    'imagenes/DJI_20251227_193714_468.webp',
    'imagenes/DJI_20251227_193732_421.webp',
    'imagenes/DJI_20251227_193735_766.webp',
    'imagenes/DJI_20251227_193748_938.webp',
    'imagenes/DJI_20251227_193756_888.webp',
    'imagenes/DJI_20251227_193801_644.webp',
    'imagenes/DJI_20251227_193817_259.webp',
    'imagenes/DJI_20251227_193819_463.webp',
    'imagenes/DJI_20251227_193900_834.webp',
    'imagenes/DJI_20251227_193909_714.webp',
    'imagenes/DJI_20251227_193912_819.webp',
    'imagenes/DJI_20251227_193957_325.webp',
    'imagenes/DJI_20251227_193959_364.webp',
    'imagenes/DJI_20251227_194008_574.webp',
    'imagenes/DJI_20251227_194021_818.webp',
    'imagenes/DJI_20251227_194045_399.webp',
    'imagenes/DJI_20251227_195720_030.webp',
    'imagenes/DJI_20251227_195726_246.webp',
    'imagenes/DJI_20251227_195728_671.webp',
    'imagenes/DJI_20251227_195828_521.webp',
    'imagenes/DJI_20251227_195831_941.webp',
    'imagenes/DJI_20251227_195839_846.webp',
    'imagenes/DJI_20251227_195843_986.webp',
    'imagenes/DJI_20251227_195852_445.webp',
    'imagenes/DJI_20251227_195938_809.webp',
    'imagenes/DJI_20251227_195947_600.webp',
    'imagenes/DJI_20251227_195953_344.webp',
    'imagenes/DJI_20251227_195958_985.webp',
    'imagenes/DJI_20251227_200005_133.webp',
    'imagenes/DJI_20251227_200016_805.webp',
    'imagenes/DJI_20251227_200022_025.webp',
    'imagenes/DJI_20251227_200025_144.webp',
    'imagenes/DJI_20251227_200029_029.webp',
    'imagenes/DJI_20251227_200031_894.webp',
    'imagenes/DJI_20251227_200035_045.webp',
    'imagenes/DJI_20251227_200038_524.webp',
    'imagenes/DJI_20251227_200042_560.webp',
    'imagenes/DJI_20251227_200045_694.webp',
    'imagenes/DJI_20251227_200051_333.webp',
    'imagenes/DJI_20251227_200058_413.webp',
    'imagenes/DJI_20251227_200105_899.webp',
    'imagenes/DJI_20251227_200108_298.webp',
    'imagenes/DJI_20251227_200114_194.webp',
    'imagenes/DJI_20251227_200120_898.webp',
    'imagenes/DJI_20251227_200123_206.webp',
    'imagenes/DJI_20251227_200128_995.webp',
    'imagenes/DJI_20251227_200132_238.webp',
    'imagenes/DJI_20251227_200137_473.webp',
    'imagenes/DJI_20251227_200150_537.webp',
    'imagenes/DJI_20251227_200156_147.webp',
    'imagenes/DJI_20251227_200204_248.webp',
    'imagenes/DJI_20251227_200207_712.webp',
    'imagenes/DJI_20251227_200209_947.webp',
    'imagenes/DJI_20251227_200213_560.webp',
    'imagenes/DJI_20251227_200216_608.webp',
    'imagenes/DJI_20251227_200221_677.webp',
    'imagenes/DJI_20251227_200225_455.webp',
    'imagenes/DJI_20251227_200227_706.webp',
    'imagenes/DJI_20251227_200231_171.webp',
    'imagenes/DJI_20251227_200237_831.webp',
    'imagenes/DJI_20251227_200243_171.webp',
    'imagenes/DJI_20251227_200249_561.webp',
    'imagenes/DJI_20251227_200517_611.webp',
    'imagenes/DJI_20251227_200520_458.webp',
    'imagenes/DJI_20251227_200529_055.webp',
    'imagenes/DJI_20251227_200531_305.webp',
    'imagenes/DJI_20251227_200533_735.webp',
    'imagenes/DJI_20251227_200536_616.webp',
    'imagenes/DJI_20251227_200539_750.webp',
    'imagenes/DJI_20251227_200548_180.webp',
    'imagenes/DJI_20251227_200551_105.webp',
    'imagenes/DJI_20251227_221522_105.webp',
    'imagenes/DJI_20251227_221532_202.webp',
    'imagenes/DJI_20251227_221540_902.webp',
    'imagenes/DJI_20251227_221544_770.webp',
    'imagenes/DJI_20251227_221548_553.webp',
    'imagenes/DJI_20251227_221551_023.webp',
    'imagenes/DJI_20251227_221553_362.webp',
    'imagenes/DJI_20251227_221555_885.webp',
    'imagenes/DJI_20251227_221558_467.webp',
    'imagenes/DJI_20251227_221601_467.webp',
    'imagenes/DJI_20251227_221605_711.webp',
    'imagenes/DJI_20251227_221609_988.webp',
    'imagenes/DJI_20251227_221620_548.webp',
    'imagenes/DJI_20251227_221623_533.webp',
    'imagenes/DJI_20251227_221627_911.webp',
    'imagenes/DJI_20251227_221635_698.webp',
    'imagenes/DJI_20251227_221639_733.webp',
    'imagenes/DJI_20251227_221643_917.webp',
    'imagenes/DJI_20251227_221646_089.webp',
    'imagenes/DJI_20251227_221648_703.webp',
    'imagenes/DJI_20251227_221651_388.webp',
    'imagenes/DJI_20251227_221654_371.webp',
    'imagenes/DJI_20251227_221657_284.webp',
    'imagenes/DJI_20251227_221659_893.webp',
    'imagenes/DJI_20251227_221702_168.webp',
    'imagenes/DJI_20251227_221704_945.webp',
    'imagenes/DJI_20251227_221708_443.webp',
    'imagenes/DJI_20251227_221711_051.webp',
    'imagenes/DJI_20251227_221719_916.webp',
    'imagenes/DJI_20251227_221723_608.webp',
    'imagenes/DJI_20251227_221726_278.webp',
    'imagenes/DJI_20251227_221729_145.webp',
    'imagenes/DJI_20251227_221732_263.webp',
    'imagenes/DJI_20251227_221735_921.webp',
    'imagenes/DJI_20251227_221741_083.webp',
    'imagenes/DJI_20251227_221803_554.webp',
    'imagenes/DJI_20251227_221812_072.webp',
    'imagenes/DJI_20251227_221819_947.webp',
    'imagenes/DJI_20251227_221824_674.webp',
    'imagenes/DJI_20251227_221827_494.webp',
    'imagenes/DJI_20251227_221830_195.webp',
    'imagenes/DJI_20251227_221834_738.webp',
    'imagenes/DJI_20251227_221837_545.webp',
    'imagenes/DJI_20251227_221839_986.webp',
    'imagenes/DJI_20251227_221842_461.webp',
    'imagenes/DJI_20251227_221845_989.webp',
    'imagenes/DJI_20251227_221848_673.webp',
    'imagenes/DJI_20251227_221915_135.webp',
    'imagenes/DJI_20251227_222008_909.webp',
    'imagenes/DJI_20251227_222011_507.webp',
    'imagenes/DJI_20251227_222014_101.webp',
    'imagenes/DJI_20251227_222016_228.webp',
    'imagenes/DJI_20251227_222046_530.webp',
    'imagenes/DJI_20251227_222054_737.webp',
    'imagenes/DJI_20251227_222106_060.webp',
    'imagenes/DJI_20251227_222109_468.webp',
    'imagenes/DJI_20251227_222117_269.webp',
    'imagenes/DJI_20251227_222147_134.webp',
    'imagenes/DJI_20251227_222149_065.webp',
    'imagenes/DJI_20251227_222151_376.webp',
    'imagenes/DJI_20251227_222153_686.webp',
    'imagenes/DJI_20251227_222156_540.webp',
    'imagenes/DJI_20251227_222208_087.webp',
    'imagenes/DJI_20251227_222236_259.webp',
    'imagenes/DJI_20251227_222327_352.webp',
    'imagenes/DJI_20251227_222330_637.webp',
    'imagenes/DJI_20251227_222334_268.webp',
    'imagenes/DJI_20251227_222340_460.webp',
    'imagenes/DJI_20251227_222345_442.webp',
    'imagenes/DJI_20251227_222348_203.webp',
    'imagenes/DJI_20251227_222430_621.webp',
    'imagenes/DJI_20251227_222604_272.webp',
    'imagenes/DJI_20251227_222614_562.webp',
    'imagenes/DJI_20251227_222617_141.webp',
    'imagenes/DJI_20251227_222639_283.webp',
    'imagenes/DJI_20251227_222641_391.webp',
    'imagenes/DJI_20251227_222652_991.webp',
    'imagenes/DJI_20251227_222655_135.webp',
    'imagenes/DJI_20251227_222706_537.webp',
    'imagenes/DJI_20251227_222741_860.webp',
    'imagenes/DJI_20251227_222750_997.webp',
    'imagenes/DJI_20251227_222825_965.webp',
    'imagenes/DJI_20251227_222834_065.webp',
    'imagenes/DJI_20251227_222842_390.webp',
    'imagenes/DJI_20251227_222918_377.webp',
    'imagenes/DJI_20251227_223420_861.webp',
    'imagenes/DJI_20251227_223439_959.webp',
    'imagenes/DJI_20251227_223446_361.webp',
    'imagenes/DJI_20251227_223606_074.webp',
    'imagenes/DJI_20251227_223608_231.webp',
    'imagenes/DJI_20251227_223611_820.webp',
    'imagenes/DJI_20251227_223615_121.webp',
    'imagenes/DJI_20251227_223617_893.webp',
    'imagenes/DJI_20251227_223623_611.webp',
    'imagenes/DJI_20251227_223625_497.webp',
    'imagenes/DJI_20251227_223628_321.webp',
    'imagenes/DJI_20251227_223630_508.webp',
    'imagenes/DJI_20251227_225636_100.webp',
    'imagenes/DJI_20251227_225640_345.webp',
    'imagenes/DJI_20251227_225643_614.webp',
    'imagenes/DJI_20251227_225703_011.webp',
    'imagenes/DJI_20251227_225719_706.webp',
    'imagenes/DJI_20251227_225722_091.webp',
    'imagenes/DJI_20251227_225752_970.webp',
    'imagenes/DJI_20251227_225755_592.webp',
    'imagenes/DJI_20251227_225808_147.webp',
    'imagenes/DJI_20251227_225824_946.webp',
    'imagenes/DJI_20251227_225834_246.webp',
    'imagenes/DJI_20251227_225842_916.webp',
    'imagenes/DJI_20251227_225845_826.webp',
    'imagenes/DJI_20251227_225851_796.webp',
    'imagenes/DJI_20251227_225910_351.webp',
    'imagenes/DJI_20251227_225914_866.webp',
    'imagenes/DJI_20251227_225921_150.webp',
    'imagenes/DJI_20251227_225926_687.webp',
    'imagenes/DJI_20251227_225929_159.webp',
    'imagenes/DJI_20251227_225933_811.webp',
    'imagenes/DJI_20251227_225939_961.webp',
    'imagenes/DJI_20251227_225946_381.webp',
    'imagenes/DJI_20251227_225957_316.webp',
    'imagenes/DJI_20251227_230002_266.webp',
    'imagenes/DJI_20251227_230007_424.webp',
    'imagenes/DJI_20251227_230017_531.webp',
    'imagenes/DJI_20251227_230039_239.webp',
    'imagenes/DJI_20251227_230046_171.webp',
    'imagenes/DJI_20251227_230146_534.webp',
    'imagenes/DJI_20251227_230149_624.webp',
    'imagenes/DJI_20251227_230151_600.webp',
    'imagenes/DJI_20251227_230220_479.webp',
    'imagenes/DJI_20251227_230223_256.webp',
    'imagenes/DJI_20251227_230229_102.webp',
    'imagenes/DJI_20251227_230231_954.webp',
    'imagenes/DJI_20251227_230236_587.webp',
    'imagenes/DJI_20251227_230249_789.webp',
    'imagenes/DJI_20251227_230255_729.webp',
    'imagenes/DJI_20251227_230258_249.webp',
    'imagenes/DJI_20251227_230300_947.webp',
    'imagenes/DJI_20251227_230308_614.webp',
    'imagenes/DJI_20251227_230315_079.webp',
    'imagenes/DJI_20251227_230319_834.webp',
    'imagenes/DJI_20251227_230333_980.webp',
    'imagenes/DJI_20251227_230337_670.webp',
    'imagenes/DJI_20251227_230339_995.webp',
    'imagenes/DJI_20251227_230343_909.webp',
    'imagenes/DJI_20251227_230350_734.webp',
    'imagenes/DJI_20251227_230521_158.webp',
    'imagenes/DJI_20251227_230528_237.webp',
    'imagenes/DJI_20251227_230539_651.webp',
    'imagenes/DJI_20251227_230549_508.webp',
    'imagenes/DJI_20251227_230551_818.webp',
    'imagenes/DJI_20251227_230555_674.webp',
    'imagenes/DJI_20251227_230601_221.webp',
    'imagenes/DJI_20251227_230608_108.webp',
    'imagenes/DJI_20251227_230636_504.webp',
    'imagenes/DJI_20251227_230638_882.webp',
    'imagenes/DJI_20251227_230644_227.webp',
    'imagenes/DJI_20251227_230649_117.webp',
    'imagenes/DJI_20251227_230651_833.webp',
    'imagenes/DJI_20251227_230653_766.webp',
    'imagenes/DJI_20251227_230657_280.webp',
    'imagenes/DJI_20251227_230716_060.webp',
    'imagenes/DJI_20251227_230718_685.webp',
    'imagenes/DJI_20251227_230723_005.webp',
    'imagenes/DJI_20251227_230726_171.webp',
    'imagenes/DJI_20251227_230728_418.webp',
    'imagenes/DJI_20251227_230731_778.webp',
    'imagenes/DJI_20251227_230743_675.webp',
    'imagenes/IMG_8622.webp',
    'imagenes/IMG_8623.webp',
    'imagenes/IMG_8641.webp',
    'imagenes/IMG_8642.webp',
    'imagenes/IMG_8643.webp',
    'imagenes/IMG_8993.webp',
    'imagenes/IMG_8994.webp',
    'imagenes/IMG_8995.webp',
    'imagenes/IMG_8996.webp',
    'imagenes/IMG_8997.webp',
    'imagenes/IMG_9096.webp',
    'imagenes/IMG_9097.webp'
];
// Thumbnail helper: usa thumb/ en grid para ahorrar RAM en moviles
function getThumbPath(fullPath) {
    return fullPath.replace('imagenes/', 'imagenes/thumb/');
}


const STORAGE_KEY = 'xv_anos_geraldine_vazquez_photo_selections';
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// HELPER FUNCTIONS
// ========================================
function isYouTubeVideo(item) {
    return item.startsWith('youtube:');
}

function getYouTubeId(item) {
    return item.replace('youtube:', '');
}

function getYouTubeThumbnail(videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

function getYouTubeEmbedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        redes: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.redes) stats.redes++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countRedes').textContent = stats.redes;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún. Por favor, sube las fotos al directorio imagenes/</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.redes || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        // Add category classes
        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');
            if (selection.redes) categories.push('redes');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        // Build badges HTML
        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.redes) badgesHTML += '<span class="badge badge-redes">📱 Redes Sociales</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        // Determine if it's a YouTube video or image
        const isVideo = isYouTubeVideo(photo);
        const displayNumber = isVideo ? `Video ${index + 1}` : `Foto ${index + 1}`;

        let mediaHTML;
        if (isVideo) {
            const videoId = getYouTubeId(photo);
            const thumbnail = getYouTubeThumbnail(videoId);
            mediaHTML = `
                <div class="photo-image-container video-container">
                    <img src="${thumbnail}" alt="${displayNumber}" loading="lazy">
                    <div class="video-overlay">
                        <div class="play-button">▶</div>
                    </div>
                </div>
            `;
        } else {
            mediaHTML = `
                <div class="photo-image-container">
                    <img src="${getThumbPath(photo)}" alt="${displayNumber}" loading="lazy">
                </div>
            `;
        }

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'redes':
                show = selection.redes === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.redes && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    // Update button states
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterRedes').textContent = `Redes Sociales (${stats.redes})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const isVideo = isYouTubeVideo(photo);
    const displayNumber = isVideo ? `Video ${index + 1}` : `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    // Clear previous content and add new media
    if (isVideo) {
        const videoId = getYouTubeId(photo);
        const embedUrl = getYouTubeEmbedUrl(videoId);
        const iframe = document.createElement('iframe');
        iframe.id = 'modalImage';
        iframe.src = embedUrl;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.className = 'youtube-iframe';
        modalImageContainer.innerHTML = '';
        modalImageContainer.appendChild(iframe);
    } else {
        document.getElementById('modalImage').src = photo;
        document.getElementById('modalImage').alt = displayNumber;
    }

    // Load current selections
    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {

    const modal = document.getElementById('photoModal');

    modal.classList.remove('active');

    document.body.style.overflow = 'auto';

    currentPhotoIndex = null;

}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains("selected");
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    updateStats();
    updateFilterButtons();
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    // Only save if there's at least one selection
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        // Remove from selections if nothing is selected
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'XV Años Geraldine Vázquez',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.redes || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                redes: selection.redes || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-xv-anos-geraldine-vazquez-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '🎉 SELECCIÓN DE FOTOS - XV AÑOS GERALDINE VÁZQUEZ\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📊 RESUMEN GENERAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   📱 Para redes sociales: ${stats.redes}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'redes', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        redes: '📱 REDES SOCIALES',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved selections
    loadSelections();

    // Render gallery
    renderGallery();

    // Update stats
    updateStats();

    // Update filter buttons
    updateFilterButtons();

    // Filter buttons
    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterRedes').addEventListener('click', () => setFilter('redes'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    // Set data-filter attributes
    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterRedes').dataset.filter = 'redes';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    // Set initial active filter
    document.getElementById('btnFilterAll').classList.add('active');

    // Action buttons
    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    // Modal controls
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    // Close modal on outside click
    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

    // Navigation button event listeners
    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });

    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

});

// ========================================
// AUTO-SAVE ON VISIBILITY CHANGE
// ========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections();
    }
});

// ========================================
// BEFORE UNLOAD WARNING
// ========================================
window.addEventListener('beforeunload', (e) => {
    saveSelections();
});

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

// Inyectar botones de descarga en el modal al cargar
(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions) return;
        if (document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
