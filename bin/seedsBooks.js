const mongoose = require("mongoose");
const Books = require("../models/Books");
const fs = require("fs");

mongoose
.connect('mongodb://localhost/books', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  getData();
})
.catch(err => {
  console.error('Error conecting to mongo', err)
});

function getData(){
  Books.deleteMany()
  .then(deleted => {
    return Books.deleteMany();
  })
  .then(booksDroppedInfo => {
    Books.create(
      [{
        "title": "Anímate",
        "author": "Varios",
        "content": "Saca fotos, edita, filma y... &iexcl;hazte la pel&iacute;cula!\r\n\r\n&lt;ul&gt;\r\n&lt;li&gt;Entrevista: Gabriel Rud, La experimentaci&oacute;n como premisa&lt;/li&gt;\r\n&lt;li&gt;Carolina Cappa, una apasionada&lt;/li&gt;\r\n&lt;li&gt;Experiment&aacute; con la t&eacute;cnica de stop motion&lt;/li&gt;\r\n&lt;li&gt;&iquest;C&oacute;mo hacer un video?&lt;/li&gt;\r\n&lt;/ul&gt;",
        "publisher_date": 2013,
        "pages": 36,
        "cover": "https://olcovers2.blob.core.windows.net/coverswp/2018/02/animate-OpenLibra-350x441.jpg",
        "categories": [{
          "name": "Educación"
        }]
      }, {
        "title": "Cultura, salud, cine y televisión: Recursos audiovisuales en Ciencias de la Salud y Sociales",
        "author": "Serena Brigidi (Ed.)",
        "content": "Este libro quiere crear una reflexi&oacute;n en torno al uso, creaci&oacute;n y elaboraci&oacute;n de materiales audiovisuales &ndash;documentales, pel&iacute;culas, programas televisivos, anuncios y series de televisi&oacute;n&ndash; en la did&aacute;ctica e investigaci&oacute;n de las ciencias de la salud y ciencias sociales. \r\n\r\nPara ello se recogen diversas contribuciones realizadas en el marco del Seminario Cultura, Salud y Cine que proceden de diversos campos de saberes: Antropolog&iacute;a M&eacute;dica, Bio&eacute;tica, Historia de la Medicina, Estudios de G&eacute;nero y F&iacute;sica. \r\n\r\nPor una parte, las aportaciones tienen como objetivo explorar algunas categor&iacute;as diagn&oacute;sticas utilizadas en los discursos biom&eacute;dicos y tambi&eacute;n en t&eacute;rminos de identidades, cuerpos y estigmatizaciones (sin olvidar el papel de los profesionales de la salud, pacientes y cuidadores dentro de los recursos audiovisuales). \r\n\r\nPor otra parte, se profundizan los aspectos tecnocient&iacute;ficos y los procesos de popularizaci&oacute;n de la ciencia, la medicina y la tecnolog&iacute;a presentes en las obras cinematogr&aacute;ficas, tanto cl&aacute;sicas como modernas, relacionadas con las ciencias de la salud.",
        "publisher_date": 2016,
        "pages": 316,
        "cover": "https://olcovers2.blob.core.windows.net/coverswp/2017/11/cultura-salud-cine-television-OpenLibra-325x461.jpg",
        "categories": [{
          "name": "Cine"
        }]
      }, {
        "title": "Literaturas Compartidas",
        "author": "Teresa Basile & Enrique Foffani (Coords.)",
        "content": "En este volumen reunimos una serie de trabajos enfocados en el eje de las &ldquo;literaturas compartidas&rdquo;, es decir, en la propuesta central de la convocatoria del VIII Congreso Orbis Tertius que se llev&oacute; a cabo en la ciudad de La Plata desde el 7 al 9 de mayo de 2012. Literaturas compartidas supone indagar en los modos de pensar la literatura en su situaci&oacute;n de &ldquo;presente&rdquo;, las formas en que la literatura entra en relaci&oacute;n con la historicidad del ahora, con esa dimensi&oacute;n de lo in&eacute;dito que surge imprevisible, pero sin dejar de mostrar las l&iacute;neas de continuidad que toda Tradici&oacute;n traza desde el pasado. Con literaturas compartidas hemos intentado nominar y describir las condiciones, de que se valen las literaturas, para poner y ponerse en relaci&oacute;n. \r\n\r\nDesde esta problem&aacute;tica, una de las m&aacute;s relevantes de la cr&iacute;tica actual y de su objeto-literatura, podemos por tanto interpelar sobre el estado actual de la literatura, sobre sus efectivas condiciones de existencia, sobre esa dimensi&oacute;n proteiforme, irruptora, que no se resiste a ser tan s&oacute;lo la sombra del pasado, aun cuando, como lo sabemos, la repetici&oacute;n no deje de ser creativa y var&iacute;e, seg&uacute;n pretend&iacute;a Marx, a veces como tragedia y otras como comedia.",
        "publisher_date": 2014,
        "pages": 185,
        "cover": "https://olcovers2.blob.core.windows.net/coverswp/2016/11/literaturas-compartidas-OpenLibra-325x461.gif",
        "categories": [{
          "name": "Arte - Bellas Artes"
        }]
      }, {
        "title": "La música en las Maneras de Representación cinematográfica",
        "author": "Josep Torelló",
        "content": "Todav&iacute;a se puede decir que el cambio m&aacute;s importante en el mundo del cine, el primer gran audiovisual de la historia, se produjo en 1927 con la incorporaci&oacute;n del sonido. Com&uacute;nmente, se denomina el periodo anterior a esta fecha como cine mudo o silente. Pero el cine nunca fue mudo. Casi siempre hab&iacute;a habido un piano o un comentador a pie de pantalla o, cuando no, para las grandes ocasiones, una buena orquesta. \r\n\r\nAhora bien, a finales de la d&eacute;cada de 1920, y por m&aacute;s que ya se hab&iacute;an dado algunas experimentaciones al respecto desde principios de &eacute;sta e incluso un gran inter&eacute;s desde sus or&iacute;genes, el Vitaphone fue el primer sistema eficaz de sonido sincronizado, registrado en grandes discos armonizados con la imagen que, a principios de la d&eacute;cada de 1930, fue substituido por el Movietone, que incorporaba la banda sonora en el propio fotograma.\r\n\r\n(...)\r\n\r\nY aqu&iacute; es donde adquiere un enorme inter&eacute;s el estudio, presente en este libro, que su autor Josep Torell&oacute; ha elaborado: en la explicaci&oacute;n considerable y novedosa, dentro de la disciplina de los Films Studies, de la presencia de la m&uacute;sica en los films a trav&eacute;s del desarrollo del lenguaje cinematogr&aacute;fico, y en la demostraci&oacute;n de c&oacute;mo la imagen y la m&uacute;sica se han ensamblado, desde sus or&iacute;genes, en una expresi&oacute;n conjunta que el autor califica de expresi&oacute;n cinematogr&aacute;fica. \r\n\r\nEn resumen, La m&uacute;sica en las maneras de representaci&oacute;n cinematogr&aacute;fica profundiza en la relaci&oacute;n est&eacute;tica y formal y en la articulaci&oacute;n de la imagen y el sonido en el cine, y en sus maneras de representaci&oacute;n a lo largo de la historia. Y lo hace con astucia y rigor, pero tambi&eacute;n, y sin duda, con humildad y entusiasmo, el mismo que aprend&iacute; de su autor cuando me convenci&oacute; completamente de aquella reflexi&oacute;n nietzscheana de que la vida sin m&uacute;sica ser&iacute;a un error.",
        "publisher_date": 2015,
        "pages": 116,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2016/09/la-musica-en-las-maneras-de-representacion-OpenLibra-322x461.gif",
        "categories": [{
          "name": "Cine"
        }]
      }, {
        "title": "Portal Ciencia y Ficción #5",
        "author": "Varios",
        "content": "Portal Ciencia y Ficci&oacute;n es un proyecto creado a finales del 2009, concebido como una plataforma gratuita a disposici&oacute;n de personas interesadas en dar a conocer sus trabajos; ya sea publicando parte o la totalidad de algunas de sus obras, como publicit&aacute;ndolas mediante art&iacute;culos, entrevistas, etc... Tambi&eacute;n pretende informar sobre un amplio abanico de disciplinas y materias con el mayor rigor posible (tanto cient&iacute;ficas como de entretenimiento), as&iacute; como ofrecer descargas y foros de debate y opini&oacute;n. \r\n\r\nFruto del trabajo realizado en el portal nace esta publicaci&oacute;n, una revista digital gratuita dedicada enteramente al g&eacute;nero de la Ciencia Ficci&oacute;n.\r\n\r\nParte de los contenidos de este n&uacute;mero son los siguientes:\r\n&lt;ul&gt;\r\n&lt;li&gt;Relato sonoro: El ciclo&lt;/li&gt;\r\n&lt;li&gt;Novela: Hijos bastardos de Matusalen&lt;/li&gt;\r\n&lt;li&gt;Videojuegos que no te puedes perder&lt;/li&gt;\r\n&lt;li&gt;V&iacute;deo: Biblia de la Inteligencia Artificial&lt;/li&gt;\r\n&lt;li&gt;Relato: Mutaci&oacute;n&lt;/li&gt;\r\n&lt;li&gt;Literatura musical&lt;/li&gt;\r\n&lt;li&gt;Novela: Ciudad Mar&iacute;a (Descarga)&lt;/li&gt;\r\n&lt;li&gt;Entrevista: Editorial Extinta e-ditores&lt;/li&gt;\r\n&lt;li&gt;V&iacute;deos de curiosidades cient&iacute;ficas&lt;/li&gt;\r\n&lt;li&gt;Programa: Scribus (Descarga)&lt;/li&gt;\r\n&lt;li&gt;Videorese&ntilde;as Literarias&lt;/li&gt;\r\n&lt;li&gt;Novela: El pliegue Iceberg&lt;/li&gt;\r\n&lt;li&gt;Ilustraciones: Justin Fields&lt;/li&gt;\r\n&lt;li&gt;Poes&iacute;a: Gaia Cybernetics&lt;/li&gt;\r\n&lt;li&gt;Juego del relato inventado&lt;/li&gt;\r\n&lt;li&gt;Ilustraci&oacute;n: Kate Redesiuk&lt;/li&gt;\r\n&lt;li&gt;Novela: Primeros Exiliados&lt;/li&gt;\r\n&lt;li&gt;Blog sugerido: Cerdo venusiano&lt;/li&gt;\r\n&lt;li&gt;Historieta: F$P (Irra &amp; Dabi)&lt;/li&gt;\r\n&lt;li&gt;Ilustraciones: Jonas De Ro&lt;/li&gt;\r\n&lt;li&gt;Serie televisiva: Real Humans&lt;/li&gt;\r\n&lt;li&gt;Poes&iacute;a: Desde las estrellas&lt;/li&gt;\r\n&lt;li&gt;Cine: Lovemilla&lt;/li&gt;\r\n&lt;li&gt;Novela: Disjecta Membra&lt;/li&gt;\r\n&lt;li&gt;V&iacute;deos de noticias&lt;/li&gt;\r\n&lt;li&gt;Cr&iacute;tica de cine: Interstellar&lt;/li&gt;\r\n&lt;li&gt;Cine: Infini&lt;/li&gt;\r\n&lt;li&gt;Ilustraciones: Phuoc Quan&lt;/li&gt;\r\n&lt;li&gt;Apliaci&oacute;n: La escala del Universo&lt;/li&gt;\r\n&lt;li&gt;Art&iacute;culo: Desarrollar &oacute;rganos humanos&lt;/li&gt;\r\n&lt;li&gt;Archivo: Intro en Flash (Descarga)&lt;/li&gt;\r\n&lt;li&gt;Cortometraje: Archetype&lt;/li&gt;\r\n&lt;li&gt;Foto Astron&oacute;mica&lt;/li&gt;\r\n&lt;li&gt;Pr&oacute;ximos estrenos de Ciencia Ficci&oacute;n&lt;/li&gt;\r\n&lt;li&gt;Cine: Calculator&lt;/li&gt;\r\n&lt;li&gt;Art&iacute;culo: Creacionismo religioso&lt;/li&gt;\r\n&lt;li&gt;Videocr&iacute;tica: Guardianes de la Galaxia&lt;/li&gt;\r\n&lt;li&gt;&iquest;C&oacute;mo participar en la revista?&lt;/li&gt;\r\n&lt;li&gt;Relato: El color que sali&oacute; del agua&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\nPara m&aacute;s informaci&oacute;n sobre el proyecto, esta es su p&aacute;gina web: &lt;a href=&quot;http://www.portalcienciayficcion.com/&quot;&gt;www.portalcienciayficcion.com&lt;/a&gt;",
        "publisher_date": 2015,
        "pages": 51,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2015/07/portalcienciayficcion-revista5-OpenLibra-326x461.jpg",
        "categories": [{
          "name": "PortalCienciayFicción"
        }]
      }, {
        "title": "Portal Ciencia y Ficción #4",
        "author": "Varios",
        "content": "Portal Ciencia y Ficci&oacute;n es un proyecto creado a finales del 2009, concebido como una plataforma gratuita a disposici&oacute;n de personas interesadas en dar a conocer sus trabajos; ya sea publicando parte o la totalidad de algunas de sus obras, como publicit&aacute;ndolas mediante art&iacute;culos, entrevistas, etc... Tambi&eacute;n pretende informar sobre un amplio abanico de disciplinas y materias con el mayor rigor posible (tanto cient&iacute;ficas como de entretenimiento), as&iacute; como ofrecer descargas y foros de debate y opini&oacute;n. \r\n\r\nFruto del trabajo realizado en el portal nace esta publicaci&oacute;n, una revista digital gratuita dedicada enteramente al g&eacute;nero de la Ciencia Ficci&oacute;n.\r\n\r\nParte de los contenidos de este n&uacute;mero son los siguientes:\r\n&lt;ul&gt;\r\n&lt;li&gt;El ser Humano y la Tecnolog&iacute;a&lt;/li&gt;\r\n&lt;li&gt;Relato: EVA&lt;/li&gt;\r\n&lt;li&gt;Relato: Expediente Cheli&aacute;binsk&lt;/li&gt;\r\n&lt;li&gt;Entrevista: Ra&uacute;l Fr&iacute;as&lt;/li&gt;\r\n&lt;li&gt;M&uacute;sica de Borg&lt;/li&gt;\r\n&lt;li&gt;Guardianes de la Galaxia&lt;/li&gt;\r\n&lt;li&gt;Microrelato: Sue&ntilde;os visionarios&lt;/li&gt;\r\n&lt;li&gt;Relato: Sr Helder&lt;/li&gt;\r\n&lt;li&gt;Cosplay&lt;/li&gt;\r\n&lt;li&gt;Entrevista: Fedor Yanine&lt;/li&gt;\r\n&lt;li&gt;Rese&ntilde;a: Quayos Caeli Enarrant&lt;/li&gt;\r\n&lt;li&gt;Historieta: De la manera correcta&lt;/li&gt;\r\n&lt;li&gt;Relato: Sesi&oacute;n&lt;/li&gt;\r\n&lt;li&gt;Rese&ntilde;a: El exilio de Sharra&lt;/li&gt;\r\n&lt;li&gt;Relato inventado&lt;/li&gt;\r\n&lt;li&gt;Nekoland&lt;/li&gt;\r\n&lt;li&gt;Videojuego: Saga Fallout&lt;/li&gt;\r\n&lt;li&gt;Microrelato: Estrellas&lt;/li&gt;\r\n&lt;li&gt;Retroinform&aacute;tica&lt;/li&gt;\r\n&lt;li&gt;Esculturas con chatarra&lt;/li&gt;\r\n&lt;li&gt;La Tierra en n&uacute;meros rojos&lt;/li&gt;\r\n&lt;li&gt;Entrevista: Jos&eacute; M Maesa&lt;/li&gt;\r\n&lt;li&gt;Cortometraje: Similo&lt;/li&gt;\r\n&lt;li&gt;Ilustraciones de Asunci&oacute;n Belarte&lt;/li&gt;\r\n&lt;li&gt;Relatos por Fernando Ca&ntilde;adas&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\nPara m&aacute;s informaci&oacute;n sobre el proyecto, esta es su p&aacute;gina web: &lt;a href=&quot;http://www.portalcienciayficcion.com/&quot;&gt;www.portalcienciayficcion.com&lt;/a&gt;",
        "publisher_date": 2014,
        "pages": 82,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2014/11/portalcienciayficcion-revista4-OpenLibra-325x461.jpg",
        "categories": [{
          "name": "PortalCienciayFicción"
        }]
      }, {
        "title": "Portal Ciencia y Ficción #3",
        "author": "Varios",
        "content": "Portal Ciencia y Ficci&oacute;n es un proyecto creado a finales del 2009, concebido como una plataforma gratuita a disposici&oacute;n de personas interesadas en dar a conocer sus trabajos; ya sea publicando parte o la totalidad de algunas de sus obras, como publicit&aacute;ndolas mediante art&iacute;culos, entrevistas, etc... Tambi&eacute;n pretende informar sobre un amplio abanico de disciplinas y materias con el mayor rigor posible (tanto cient&iacute;ficas como de entretenimiento), as&iacute; como ofrecer descargas y foros de debate y opini&oacute;n. \r\n\r\nFruto del trabajo realizado en el portal nace esta publicaci&oacute;n, una revista digital gratuita dedicada enteramente al g&eacute;nero de la Ciencia Ficci&oacute;n.\r\n\r\nParte de los contenidos de este n&uacute;mero son los siguientes:\r\n&lt;ul&gt;\r\n&lt;li&gt;La Cuarta Ley - Nieves Delgado&lt;/li&gt;\r\n&lt;li&gt;Evoluci&oacute;n; vida, de qu&eacute; tipo y d&oacute;nde - Victor Vila&lt;/li&gt;\r\n&lt;li&gt;Curiosidades cient&iacute;ficas - Victor Vila&lt;/li&gt;\r\n&lt;li&gt;Ser - Fernando Ramos&lt;/li&gt;\r\n&lt;li&gt;Cris&aacute;lida - Victor Vila&lt;/li&gt;\r\n&lt;li&gt;Animales asombrosos - Victor Vila&lt;/li&gt;\r\n&lt;li&gt;The Kromwell Show - Jorge Villena&lt;/li&gt;\r\n&lt;li&gt;Pel&iacute;culas que quiz&aacute; no conozcas - Juanje L&oacute;pez&lt;/li&gt;\r\n&lt;li&gt;Entrevista: Miguel Santander&lt;/li&gt;\r\n&lt;li&gt;Vaspev-I - Luis Alonso Cruz&lt;/li&gt;\r\n&lt;li&gt;El beso de Eli - Jos&eacute; Javier Mart&iacute;nez&lt;/li&gt;\r\n&lt;li&gt;Curiosidades de rodaje&lt;/li&gt;\r\n&lt;li&gt;Musco - Cano Farragule&lt;/li&gt;\r\n&lt;li&gt;Hacia dentro - Nieves Delgado&lt;/li&gt;\r\n&lt;li&gt;OFF - Ra&uacute;l Ib&aacute;&ntilde;ez&lt;/li&gt;\r\n&lt;li&gt;Sobre la Ciencia Ficci&oacute;n y los futuros pesimistas - Ronald&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\nPara m&aacute;s informaci&oacute;n sobre el proyecto, esta es su p&aacute;gina web: &lt;a href=&quot;http://www.portalcienciayficcion.com/&quot;&gt;www.portalcienciayficcion.com&lt;/a&gt;",
        "publisher_date": 2014,
        "pages": 91,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2014/04/portalcienciayficcion-revista3-OpenLibra-324x461.jpg",
        "categories": [{
          "name": "PortalCienciayFicción"
        }]
      }, {
        "title": "Animación 3D: Recorridos Virtuales",
        "author": "Álvaro Ulldemolins",
        "content": "Este m&oacute;dulo pertenece a la colecci&oacute;n de Animaci&oacute;n 3D editada por la UOC, centr&aacute;ndose en el an&aacute;lisis y desarrollo de recorridos virtuales en entornos tridimensionales. \r\n\r\nLos temas que aqu&iacute; se tratan son: \r\n\r\n&lt;ul&gt;\r\n&lt;li&gt;Qu&eacute; es un recorrido virtual&lt;/li&gt;\r\n&lt;li&gt;En qu&eacute; se aplican los recorridos virtuales&lt;/li&gt;\r\n&lt;li&gt;Teor&iacute;a de un recorrido virtual&lt;/li&gt;\r\n&lt;li&gt;Tipos de planos&lt;/li&gt;\r\n&lt;li&gt;Storyboard&lt;/li&gt;\r\n&lt;li&gt;Recorridos interactivos&lt;/li&gt;\r\n&lt;li&gt;Tecnolog&iacute;as disponibles&lt;/li&gt;\r\n&lt;li&gt;Tipos de c&aacute;maras&lt;/li&gt;\r\n&lt;li&gt;Anatom&iacute;a de la c&aacute;mara 3D&lt;/li&gt;\r\n&lt;li&gt;Animaci&oacute;n de c&aacute;maras a trav&eacute;s de un recorrido&lt;/li&gt;\r\n&lt;li&gt;Animaci&oacute;n cl&aacute;sica key-to-key&lt;/li&gt;\r\n&lt;li&gt;Creaci&oacute;n de un panorama 360&lt;/li&gt;\r\n&lt;li&gt;Render de diferentes c&aacute;maras (Batch Render)&lt;/li&gt;\r\n&lt;/ul&gt;",
        "publisher_date": 2013,
        "pages": 82,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2014/03/Animacion-3D-M5-OpenLibra-325x461.png",
        "categories": [{
          "name": "Diseño / 3D"
        }]
      }, {
        "title": "Guionización de series de animación",
        "author": "Neus Devesa",
        "content": "El proceso de escribir una historia de animaci&oacute;n no es muy diferente al proceso de creaci&oacute;n de cualquier otra historia, ya sea interpretada por actores de carne y hueso, personajes en 2D o 3D; vaya a ser transmitida por la televisi&oacute;n o el cine, o ser editada en un libro. El punto de arranque, el momento en el que el creador piensa qu&eacute; quiere narrar, a qui&eacute;n le pasar&aacute; la historia y qu&eacute; cosas suceder&aacute;n no es diferente, sea cual sea la transformaci&oacute;n que despu&eacute;s se llevar&aacute; a cabo. Lo que cambia es el desarrollo de la historia. El medio de comunicaci&oacute;n por el que se escribe, en cambio, s&iacute; que condiciona enormemente el modo como el guionista, en nuestro caso, desarrolla el gui&oacute;n.\r\n\r\nCada producci&oacute;n audiovisual utiliza unos medios, tiene unos recursos determinados para su realizaci&oacute;n, tanto t&eacute;cnicos, como econ&oacute;micos. &Eacute;stos marcan el modo de convertir aquella idea inicial en un producto acabado. En este sentido, es muy diferente si hablamos de rodar un gui&oacute;n con personas e im&aacute;genes reales, que si elaboramos una producci&oacute;n de animaci&oacute;n. El guionista primeramente debe dominar el medio para el que trabaja, conocer sus ventajas y limitaciones. De acuerdo con el medio deber&aacute; adaptar su historia.\r\n\r\nEs pues el momento de pasar a la acci&oacute;n y descubrir aquellos elementos que nos ayudar&aacute;n a escribir una historia coherente, bien estructura y que se pueda convertir en una buena producci&oacute;n audiovisual.",
        "publisher_date": 2011,
        "pages": 62,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2014/03/Guionizacion-de-series-OpenLibra-325x461.png",
        "categories": [{
          "name": "Cine"
        }]
      }, {
        "title": "Haciendo dibujitos en el Fin del Mundo",
        "author": "Varios",
        "content": "Este libro Haciendo dibujitos en el fin del mundo pretende resumir la experiencia reunida durante los primeros cinco a&ntilde;os de funcionamiento de la Escuela para Animadores de Rosario.\r\n\r\nLa Escuela fue fundada en 2006 por una iniciativa conjunta del Centro Audiovisual Rosario y la Isla de los Inventos (instituciones de la Secretar&iacute;a de Cultura y Educaci&oacute;n municipal) y un grupo de animadores independientes y autodidactas que, previamente, hab&iacute;an fundado el taller El S&oacute;tano en el mismo local donde sol&iacute;a funcionar el estudio-escuela de Luis Bras. Actualmente, a dicho grupo se han sumado egresados de la Escuela, d&aacute;ndose lugar a la conformaci&oacute;n de una cooperativa de trabajo3. En tal sentido, nos proponemos recopilar opiniones e ilustraciones elaboradas por los docentes de la Escuela sobre los contenidos que se despliegan cada a&ntilde;o a lo largo del curso y citar art&iacute;culos o p&aacute;rrafos de referentes notables que consideramos imprescindibles y esclarecedores.\r\n\r\nEl objetivo de la Escuela es reunir cada a&ntilde;o a treinta dibujantes, interesados en poner sus dibujos en movimiento para contar historias. En una ciudad que no tuvo y no tiene un desarrollo industrial en la producci&oacute;n de dibujos animados y en medio de una acelerada evoluci&oacute;n de las herramientas digitales\r\n\r\npara realizar y distribuir bienes audiovisuales, nuestra apuesta es poner el foco sobre el animador, sus motivaciones, su sensibilidad y su visi&oacute;n particular de la realidad, valorando la diversidad y la condici&oacute;n humana.",
        "publisher_date": 2011,
        "pages": 101,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2014/03/Haciendo-dibujitos-en-el-fin-del-mundo-OpenLibra-350x432.jpg",
        "categories": [{
          "name": "Cine"
        }]
      }, {
        "title": "Música e Imágenes hasta la llegada del Cine",
        "author": "Montserrat Armell Femenía & Antonio Ezquerro Esteban",
        "content": "La &quot;pre-historia&quot; del cine hablado, en lo relativo a la coordinaci&oacute;n de im&aacute;genes en movimiento y setido, supone un per&iacute;odo extens&iacute;simo de tiempo, que abarca miles de a&ntilde;os, desde la ilustraci&oacute;n sonora de sombras proyectadas documentada en la antigua China, hasta pr&aacute;cticamente los albores del cinemat&oacute;grafo, un avance tecnol&oacute;gico impensable &mdash; hoy en d&iacute;a m&aacute;s que nunca &mdash; sin la aportaci&oacute;n que m&uacute;sica y sonido han hecho al denominado s&eacute;ptimo arte. \r\n\r\nEl presente trabajo pretende ofrecer una panor&aacute;mica de lahistoria de la &mdash;documentadamente inconexa, aunque continua&mdash; preocupaci&oacute;n humana por fijar el movimiento de un modo visual y sonoro a un tiempo, prestando particular atenci&oacute;n a algunos logros t&eacute;cnicos de especial relevancia (la linterna m&aacute;gica, la arm&oacute;nica de cristal, las fantasmagor&iacute;as, el teatro de sombras), dentro del recorrido que facilitar&iacute;a, ya entrado el siglo XX, el nacimiento del cine sonoro. Una mera introducci&oacute;n a un mundo fascinante y deplena actualidad, que, en el terreno puramente musicol&oacute;gico, por lo pr&aacute;cticamente virgen a fecha de hoy (y la escas&iacute;sima y marginal bibliograf&iacute;a al respecto es la mayor prueba de ello), precisar&iacute;a de nuevos y m&aacute;s detallados estudios. ",
        "publisher_date": 2003,
        "pages": 75,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2014/01/Musica-e-imagenes-hasta-la-llegada-del-cine-OpenLibra-350x459.gif",
        "categories": [{
          "name": "Arte - Bellas Artes"
        }]
      }, {
        "title": "La biometría para la identificación de las personas",
        "author": "Francesc Serratosa",
        "content": "La biometr&iacute;a es una ciencia que analiza las distancias y posiciones entre las partes del cuerpo para poder identificar o clasificar a las personas. \r\n\r\nHay varios rasgos biom&eacute;tricos que hoy en d&iacute;a se usan para tal fin, como las huellas dactilares, la cara, el iris, la mano, la retina o la firma. La biometr&iacute;a, y m&aacute;s en concreto las huellas dactilares, ya se estudiaban a finales del siglo XIX en aplicaciones forenses, es decir, para tratar de identificar a criminales o la identidad de las personas. En la actualidad, no solo se usa en estas aplicaciones sino en otras, como el control en los aeropuertos, en los accesos a centrales nucleares o a instalaciones militares o incluso, simplemente, para acceder a las oficinas o a la piscina municipal. Este es el motivo por el que la biometr&iacute;a est&aacute; entrando en nuestras vidas cotidianas y es necesario que los inform&aacute;ticos o ingenieros en general tengan unos m&iacute;nimos conocimientos sobre la materia.\r\n\r\nCon el objetivo de aumentar la fiabilidad de los sistemas biom&eacute;tricos, en algunas aplicaciones se fusionan varios rasgos biom&eacute;tricos.\r\n\r\nEl objetivo final de incorporar un sistema biom&eacute;trico dentro de otro sistema es aumentar la seguridad de este segundo sistema. Por este motivo, es importante estudiar que el sistema biom&eacute;trico en s&iacute; no tenga grietas por donde se pueda vulnerar la seguridad de todo el sistema en general.",
        "publisher_date": 2012,
        "pages": 50,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2014/01/Biometria-para-identificacion-personas-OpenLibra-325x461.gif",
        "categories": [{
          "name": "Seguridad"
        }]
      }, {
        "title": "El Cosmonauta",
        "author": "Nicolás Alcalá",
        "content": "&iquest;Y si volvieses a casa... y ya no hubiese nadie?\r\n\r\nEn 1975, el primer cosmonauta ruso en la Luna no consigue regresar, y se le da por perdido en el espacio. &Eacute;l, sin embargo, a trav&eacute;s de fantasmales mensajes de radio, clama haber vuelto a la Tierra y haberla encontrado vac&iacute;a, sin un alma.\r\n\r\nSu irreal presencia y su voz ir&aacute;n destruyendo poco a poco el mundo de sus seres queridos.\r\n\r\nEl Cosmonauta (The Cosmonaut ) es una pel&iacute;cula espa&ntilde;ola de ciencia ficci&oacute;n, o de historia ficci&oacute;n, estrenada en mayo de 2013. Fue filmada en Letonia, Rusia y Espa&ntilde;a, en idioma ingl&eacute;s. Ambientada en la antigua Uni&oacute;n Sovi&eacute;tica durante la &eacute;poca de la carrera espacial, en un supuesto viaje a la Luna.\r\n\r\nFinanciada en gran parte mediante la f&oacute;rmula del micromecenazgo o financiaci&oacute;n colectiva a trav&eacute;s de peque&ntilde;as donaciones. En su distribuci&oacute;n recurre simult&aacute;neamente a todos los sistemas: estreno convencional en salas de cine, emisi&oacute;n en TV, venta de libro con DVD, y acceso gratis en Internet.",
        "publisher_date": 2010,
        "pages": 68,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2013/11/El-Cosmonauta-OpenLibra-350x459.gif",
        "categories": [{
          "name": "Cine"
        }]
      }, {
        "title": "Portal Ciencia y Ficción #2",
        "author": "Varios",
        "content": "Portal Ciencia y Ficci&oacute;n es un proyecto creado a finales del 2009, concebido como una plataforma gratuita a disposici&oacute;n de personas interesadas en dar a conocer sus trabajos; ya sea publicando parte o la totalidad de algunas de sus obras, como publicit&aacute;ndolas mediante art&iacute;culos, entrevistas, etc... Tambi&eacute;n pretende informar sobre un amplio abanico de disciplinas y materias con el mayor rigor posible (tanto cient&iacute;ficas como de entretenimiento), as&iacute; como ofrecer descargas y foros de debate y opini&oacute;n. \r\n\r\nFruto del trabajo realizado en el portal nace esta publicaci&oacute;n, una revista digital gratuita dedicada enteramente al g&eacute;nero de la Ciencia Ficci&oacute;n.\r\n\r\nParte de los contenidos de este n&uacute;mero son los siguientes:\r\n&lt;ul&gt;\r\n&lt;li&gt;Relatos: V&iacute;ctor Vila, Ricardo Manzanaro, &Aacute;lvaro de la Riva, Nieves Delgado, Fernando Ca&ntilde;adas, Fernando Schekaiban&lt;/li&gt;\r\n&lt;li&gt;Curiosidades cient&iacute;ficas - V&iacute;ctor Vila&lt;/li&gt;\r\n&lt;li&gt;Historieta: Non.Plus.Ultra - El Irra&lt;/li&gt;\r\n&lt;li&gt;&iquest;Vivimos en una simulaci&oacute;n? - V&iacute;ctor Vila&lt;/li&gt;\r\n&lt;li&gt;Pel&iacute;culas que quiz&aacute;s no conozcas - Juanje L&oacute;pez&lt;/li&gt;\r\n&lt;li&gt;Saga Pandoran Age - Pablo Montagudo&lt;/li&gt;\r\n&lt;li&gt;Curiosidades de rodaje - V&iacute;ctor Vila&lt;/li&gt;\r\n&lt;li&gt;Videojuego: Deadspace - Carlos Climent&lt;/li&gt;\r\n&lt;li&gt;Cine: Oblivion - V&iacute;ctor Vila&lt;/li&gt;\r\n&lt;li&gt;Poes&iacute;a: Almas de metal - V&iacute;ctor Vila&lt;/li&gt;\r\n&lt;li&gt;Historieta: Lluvia - Damian Horacio&lt;/li&gt;\r\n&lt;li&gt;El renacer de los Homo Sapiens Perpetuus - Fernando Jim&eacute;nez&lt;/li&gt;\r\n&lt;li&gt;Entrevista a Sergio Palacios - Nieves Delgado&lt;/li&gt;\r\n&lt;li&gt;Evento: Gatercon 2.0 - Vicente Hern&aacute;ndiz&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\nPara m&aacute;s informaci&oacute;n sobre el proyecto, esta es su p&aacute;gina web: &lt;a href=&quot;http://www.portalcienciayficcion.com/&quot;&gt;www.portalcienciayficcion.com&lt;/a&gt;",
        "publisher_date": 2013,
        "pages": 105,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2013/11/portalcienciayficcion-revista2-OpenLibra-325x461.jpg",
        "categories": [{
          "name": "PortalCienciayFicción"
        }]
      }, {
        "title": "Portal Ciencia y Ficción #1",
        "author": "Varios",
        "content": "Portal Ciencia y Ficci&oacute;n es un proyecto creado a finales del 2009, concebido como una plataforma gratuita a disposici&oacute;n de personas interesadas en dar a conocer sus trabajos; ya sea publicando parte o la totalidad de algunas de sus obras, como publicit&aacute;ndolas mediante art&iacute;culos, entrevistas, etc... Tambi&eacute;n pretende informar sobre un amplio abanico de disciplinas y materias con el mayor rigor posible (tanto cient&iacute;ficas como de entretenimiento), as&iacute; como ofrecer descargas y foros de debate y opini&oacute;n. \r\n\r\nFruto del trabajo realizado en el portal nace esta publicaci&oacute;n, una revista digital gratuita dedicada enteramente al g&eacute;nero de la Ciencia Ficci&oacute;n.\r\n\r\nEl contenido de este n&uacute;mero es el siguiente:\r\n&lt;ul&gt;\r\n&lt;li&gt;Relato: El &aacute;ngel exterminador - Ra&uacute;l Fr&iacute;as&lt;/li&gt;\r\n&lt;li&gt;Ilustraci&oacute;n - Francisco Javier&lt;/li&gt;\r\n&lt;li&gt;Entrevista: Jon Mikel Caballero (Director)  - V&iacute;ctor Vila&lt;/li&gt;\r\n&lt;li&gt;Art&iacute;culo: Transhumanismo - Nieves Delgado&lt;/li&gt;\r\n&lt;li&gt;Relato: Estaci&oacute;n espacial UVR - V&iacute;ctor Vila&lt;/li&gt;\r\n&lt;li&gt;Dibujos  - Francisco Javier&lt;/li&gt;\r\n&lt;li&gt;Videojuego: Proyecto Nemesis - V&iacute;ctor Vila&lt;/li&gt;\r\n&lt;li&gt;Cine: Blade runner  - Koldobika Ascaso&lt;/li&gt;\r\n&lt;li&gt;Relato: La pregunta correcta - Nieves Delgado&lt;/li&gt;\r\n&lt;li&gt;Entrevista: Fedor Yanine (Novelista)  - V&iacute;ctor Vila&lt;/li&gt;\r\n&lt;li&gt;Dibujos  - Francisco Javier&lt;/li&gt;\r\n&lt;li&gt;Relato (Serie): Esperanza - Danny D&iacute;az&lt;/li&gt;\r\n&lt;li&gt;Art&iacute;culo: Chips cerebrales inminentes  - V&iacute;ctor Vila&lt;/li&gt;\r\n&lt;li&gt;Relato: La condena - Nieves Delgado&lt;/li&gt;\r\n&lt;li&gt;Videojuego: Mass Effect - Danny D&iacute;az&lt;/li&gt;\r\n&lt;li&gt;Relato: Multiverso - Fedor Yanine&lt;/li&gt;\r\n&lt;li&gt;Cine: Prometheus  - V&iacute;ctor Vila&lt;/li&gt;\r\n&lt;li&gt;Art&iacute;culo: Edad de oro del Software Espa&ntilde;ol - Carlos Climent&lt;/li&gt;\r\n&lt;li&gt;Ilustraci&oacute;n y dibujos - Francisco Javier&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\nPara m&aacute;s informaci&oacute;n sobre el proyecto, esta es su p&aacute;gina web: &lt;a href=&quot;http://www.portalcienciayficcion.com/&quot;&gt;www.portalcienciayficcion.com&lt;/a&gt;",
        "publisher_date": 2013,
        "pages": 64,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2013/11/portalcienciayficcion-revista1-OpenLibra-325x461.jpg",
        "categories": [{
          "name": "PortalCienciayFicción"
        }]
      }, {
        "title": "Teoría y práctica del cine como dispositivo crítico",
        "author": "Ana Rodriguez Granell",
        "content": "Abordar las cinematograf&iacute;as pol&iacute;ticas de la primera mitad del siglo XX parte de un inter&eacute;s por un marco mucho m&aacute;s amplio e inabarcable como son las relaciones entre la cultura y la sociedad. Creemos pues que, detectar las formas de lo pol&iacute;tico, ha de partir de un an&aacute;lisis que comprenda c&oacute;mo se constituyen ciertos discursos y relatos y qu&eacute; relaciones establecen con las estructuras que componen el campo social y cultural, con el objetivo de visibilizar c&oacute;mo se estabilizan ciertos &oacute;rdenes y, a la vez, c&oacute;mo emergen ciertas transgresiones frente a este orden. Quiz&aacute; no estemos m&aacute;s que reverberando las preguntas que emergen tras la IIGM, en la disciplina de la \r\nhistoria del arte, acerca de c&oacute;mo ciertos fen&oacute;menos, en este caso las producciones culturales, se revelan como parte de la realidad social y abarcan cuestiones que van m&aacute;s all&aacute; de los &quot;grovigli esistenziali&quot; individuales. \r\n\r\nSea como sea, una de las cuestiones con las que el lector de esta investigaci&oacute;n se encontrar&aacute;, va a ser la del alcance de la modernidad y las tensiones entre las formas de pensamiento afirmativo y negativo que emergen en ella como formas de entender la producci&oacute;n de subjetividades. \r\n\r\nDe cara a exponer -o justificar- la elecci&oacute;n del t&iacute;tulo hemos hecho uso de un concepto que ha tenido indudable fortuna en los estudios sobre la imagen como es el de dispositivo.",
        "publisher_date": 2012,
        "pages": 720,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2013/09/Teoria-y-practica-del-cine-como-dispositivo-critico-OpenLibra-350x459.gif",
        "categories": [{
          "name": "Cine"
        }]
      }, {
        "title": "Estudios sobre Arte y Comunicación Social",
        "author": "José Luis Crespo Fajardo (Coord.)",
        "content": "Desde finales del siglo XIX, con el desarrollo de los medios de comunicaci&oacute;n, la prensa, propaganda, anuncios, carteles y publicidad en general, aquellas tradicionales relaciones existentes entre arte y sociedad se han ido haciendo cada vez m&aacute;s complejas.\r\n\r\nEn nuestros d&iacute;as la uni&oacute;n entre los distintos medios de comunicaci&oacute;n y la actividad art&iacute;stica es indivisible, no pueden entenderse por separado. Podemos encontrar arte en cualquier imagen de las que nos ofrecen diariamente los medios de comunicaci&oacute;n. Ciertamente, son elementos propios del arte los que estimulan la sugesti&oacute;n, atracci&oacute;n y capacidad de sorpresa de la imagen publicitaria, capaz de determinar la aceptaci&oacute;n de un determinado producto, su influencia en distintos gustos y modas. Dise&ntilde;ar, efectivamente, es el arte de transmitir el valor del producto a trav&eacute;s de la concreci&oacute;n d e una serie de valores est&eacute;ticos. \r\n\r\nPor otro lado, hoy asistimos a una &eacute;poca de esplendor comunicativo, con el gran auge de las nuevas tecnolog&iacute;as y sus herramientas de conexi&oacute;n social. A trav&eacute;s de estos cauces nuevas v&iacute;as se abren para la expresi&oacute;n art&iacute;stica. Todas estas sugerentes ideas en las que numerosos expertos trabajan en la actualidad hacen de las Bellas Artes una fuente de inspiraci&oacute;n inagotable para los nuevos investigadores en comunicaci&oacute;n social, recuperando est&eacute;ticas o contrastando datos del presente.\r\n\r\nLa obra Estudios sobre arte y comunicaci&oacute;n social, coordinada por el Dr. Jos&eacute; Luis Crespo Fajardo, es una muestra de toda esta ebullici&oacute;n investigadora tan apasionante como novedosa. El que por fin exista este libro colectivo como plataforma de encuentro es una gran iniciativa para dar a conocer las investigaciones internacionales al respecto, las m&aacute;s actuales y de calidad. Es un proyecto que alabamos desde nuestra universidad hispalense y a cuyos autores deseamos el reconocimiento que sin lugar a dudas merecen.",
        "publisher_date": 2012,
        "pages": 139,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2013/06/Estudios-sobre-Arte-y-Comunicacion-Social-OpenLibra-325x461.jpg",
        "categories": [{
          "name": "Arte - Bellas Artes"
        }]
      }, {
        "title": "Clases de Cine: Compartir miradas en femenino y masculino",
        "author": "Andrea García González",
        "content": "Decir que algo es &ldquo;de cine&rdquo; significa que es estupendo. El t&iacute;tulo Clases de cine contiene un triple mensaje: que las clases pueden ser estupendas; que en ellas se puede ense&ntilde;ar y aprender a ver y hacer cine y que hay muchas clases de cine, entre ellas, cada vez m&aacute;s interesante, el cine realizado por mujeres. \r\n\r\nLa emoci&oacute;n de entrar en una sala de cine para ver pel&iacute;culas, se entremezcla hoy con otras muchas maneras de acceder a ellas: por televisi&oacute;n, en el ordenador, en el m&oacute;vil y en pantallas grandes situadas en lugares p&uacute;blicos. Son formas distintas, pero todas ellas tienen algo que nos atrae y nos permite ampliar nuestra imaginaci&oacute;n, fantas&iacute;a y conocimiento del mundo.\r\n\r\nEl cine lo hacen y lo ven mujeres y hombres, es decir seres humanos con cuerpos y experiencias distintas, significativas para nuestras vidas. La experiencia audiovisual de ver una pel&iacute;cula implica a la mayor parte de los sentidos de las mujeres y los hombres, las im&aacute;genes llegan a nuestra mente a partir de lo que perciben nuestros ojos, las voces, los sonidos y la banda sonora de la pel&iacute;cula nos llega a trav&eacute;s de la resonancia que producen en nuestros o&iacute;dos; el tacto y el gusto, o sus sensaciones evocadas, lo genera nuestra mente cuando se entremezclan vista y o&iacute;do en nuestros cuerpos. Esta relaci&oacute;n de sensaciones y sentidos llegan hasta m&iacute; y hasta ti, a nuestros cuerpos y mentes sin barreras, por lo que es importante acompa&ntilde;ar y orientar en ese mirar al cine, a las im&aacute;genes en movimiento como una parte m&aacute;s de la experiencia educativa.",
        "publisher_date": 2008,
        "pages": 82,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2012/04/Clases-de-Cine-Compartir-Miradas-OpenLibra-317x461.jpg",
        "categories": [{
          "name": "Cine"
        }]
      }]
    )
    .catch(error => {
      console.log(error);
    })
  })
}