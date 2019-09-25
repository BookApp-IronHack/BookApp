require('dotenv').config();

const mongoose = require("mongoose");
const Books = require("../models/Books");
const fs = require("fs");

mongoose
.connect(process.env.MONGO, {useNewUrlParser: true})
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
        "content": "Saca fotos, edita, filma y... ¡hazte la película!     Entrevista: Gabriel Rud, La experimentación como premisa  Carolina Cappa, una apasionada  Experimentá con la técnica de stop motion  ¿Cómo hacer un video?  ",
        "publisher_date": 2013,
        "pages": 36,
        "cover": "https://olcovers2.blob.core.windows.net/coverswp/2018/02/animate-OpenLibra-350x441.jpg",
        "categories": [{
          "name": "Educación"
        }]
      }, {
        "title": "Cultura, salud, cine y televisión: Recursos audiovisuales en Ciencias de la Salud y Sociales",
        "author": "Serena Brigidi (Ed.)",
        "content": "Este libro quiere crear una reflexión en torno al uso, creación y elaboración de materiales audiovisuales - documentales, películas, programas televisivos, anuncios y series de televisión - en la didáctica e investigación de las ciencias de la salud y ciencias sociales.  Para ello se recogen diversas contribuciones realizadas en el marco del Seminario Cultura, Salud y Cine que proceden de diversos campos de saberes: Antropología Médica, Bioética, Historia de la Medicina, Estudios de Género y Física.  Por una parte, las aportaciones tienen como objetivo explorar algunas categorías diagnósticas utilizadas en los discursos biomédicos y también en términos de identidades, cuerpos y estigmatizaciones (sin olvidar el papel de los profesionales de la salud, pacientes y cuidadores dentro de los recursos audiovisuales).  Por otra parte, se profundizan los aspectos tecnocientíficos y los procesos de popularización de la ciencia, la medicina y la tecnología presentes en las obras cinematográficas, tanto clásicas como modernas, relacionadas con las ciencias de la salud.",
        "publisher_date": 2016,
        "pages": 316,
        "cover": "https://olcovers2.blob.core.windows.net/coverswp/2017/11/cultura-salud-cine-television-OpenLibra-325x461.jpg",
        "categories": [{
          "name": "Cine"
        }]
      }, {
        "title": "Literaturas Compartidas",
        "author": "Teresa Basile & Enrique Foffani (Coords.)",
        "content": "En este volumen reunimos una serie de trabajos enfocados en el eje de las “literaturas compartidas”, es decir, en la propuesta central de la convocatoria del VIII Congreso Orbis Tertius que se llevó a cabo en la ciudad de La Plata desde el 7 al 9 de mayo de 2012. Literaturas compartidas supone indagar en los modos de pensar la literatura en su situación de “presente”, las formas en que la literatura entra en relación con la historicidad del ahora, con esa dimensión de lo inédito que surge imprevisible, pero sin dejar de mostrar las líneas de continuidad que toda Tradición traza desde el pasado. Con literaturas compartidas hemos intentado nominar y describir las condiciones, de que se valen las literaturas, para poner y ponerse en relación.  Desde esta problemática, una de las más relevantes de la crítica actual y de su objeto-literatura, podemos por tanto interpelar sobre el estado actual de la literatura, sobre sus efectivas condiciones de existencia, sobre esa dimensión proteiforme, irruptora, que no se resiste a ser tan sólo la sombra del pasado, aun cuando, como lo sabemos, la repetición no deje de ser creativa y varíe, según pretendía Marx, a veces como tragedia y otras como comedia.",
        "publisher_date": 2014,
        "pages": 185,
        "cover": "https://olcovers2.blob.core.windows.net/coverswp/2016/11/literaturas-compartidas-OpenLibra-325x461.gif",
        "categories": [{
          "name": "Arte - Bellas Artes"
        }]
      }, {
        "title": "La música en las Maneras de Representación cinematográfica",
        "author": "Josep Torelló",
        "content": "Todavía se puede decir que el cambio más importante en el mundo del cine, el primer gran audiovisual de la historia, se produjo en 1927 con la incorporación del sonido. Comúnmente, se denomina el periodo anterior a esta fecha como cine mudo o silente. Pero el cine nunca fue mudo. Casi siempre había habido un piano o un comentador a pie de pantalla o, cuando no, para las grandes ocasiones, una buena orquesta.  Ahora bien, a finales de la década de 1920, y por más que ya se habían dado algunas experimentaciones al respecto desde principios de ésta e incluso un gran interés desde sus orígenes, el Vitaphone fue el primer sistema eficaz de sonido sincronizado, registrado en grandes discos armonizados con la imagen que, a principios de la década de 1930, fue substituido por el Movietone, que incorporaba la banda sonora en el propio fotograma.  (...)  Y aquí es donde adquiere un enorme interés el estudio, presente en este libro, que su autor Josep Torelló ha elaborado: en la explicación considerable y novedosa, dentro de la disciplina de los Films Studies, de la presencia de la música en los films a través del desarrollo del lenguaje cinematográfico, y en la demostración de cómo la imagen y la música se han ensamblado, desde sus orígenes, en una expresión conjunta que el autor califica de expresión cinematográfica.  En resumen, La música en las maneras de representación cinematográfica profundiza en la relación estética y formal y en la articulación de la imagen y el sonido en el cine, y en sus maneras de representación a lo largo de la historia. Y lo hace con astucia y rigor, pero también, y sin duda, con humildad y entusiasmo, el mismo que aprendí de su autor cuando me convenció completamente de aquella reflexión nietzscheana de que la vida sin música sería un error.",
        "publisher_date": 2015,
        "pages": 116,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2016/09/la-musica-en-las-maneras-de-representacion-OpenLibra-322x461.gif",
        "categories": [{
          "name": "Cine"
        }]
      }, {
        "title": "Portal Ciencia y Ficción #5",
        "author": "Varios",
        "content": "Portal Ciencia y Ficción es un proyecto creado a finales del 2009, concebido como una plataforma gratuita a disposición de personas interesadas en dar a conocer sus trabajos; ya sea publicando parte o la totalidad de algunas de sus obras, como publicitándolas mediante artículos, entrevistas, etc... También pretende informar sobre un amplio abanico de disciplinas y materias con el mayor rigor posible (tanto científicas como de entretenimiento), así como ofrecer descargas y foros de debate y opinión.  Fruto del trabajo realizado en el portal nace esta publicación, una revista digital gratuita dedicada enteramente al género de la Ciencia Ficción.  Parte de los contenidos de este número son los siguientes:    Relato sonoro: El ciclo  Novela: Hijos bastardos de Matusalen  Videojuegos que no te puedes perder  Vídeo: Biblia de la Inteligencia Artificial  Relato: Mutación  Literatura musical  Novela: Ciudad María (Descarga)  Entrevista: Editorial Extinta e-ditores  Vídeos de curiosidades científicas  Programa: Scribus (Descarga)  Videoreseñas Literarias  Novela: El pliegue Iceberg  Ilustraciones: Justin Fields  Poesía: Gaia Cybernetics  Juego del relato inventado  Ilustración: Kate Redesiuk  Novela: Primeros Exiliados  Blog sugerido: Cerdo venusiano  Historieta: F$P (Irra & Dabi)  Ilustraciones: Jonas De Ro  Serie televisiva: Real Humans  Poesía: Desde las estrellas  Cine: Lovemilla  Novela: Disjecta Membra  Vídeos de noticias  Crítica de cine: Interstellar  Cine: Infini  Ilustraciones: Phuoc Quan  Apliación: La escala del Universo  Artículo: Desarrollar órganos humanos  Archivo: Intro en Flash (Descarga)  Cortometraje: Archetype  Foto Astronómica  Próximos estrenos de Ciencia Ficción  Cine: Calculator  Artículo: Creacionismo religioso  Videocrítica: Guardianes de la Galaxia  ¿Cómo participar en la revista?  Relato: El color que salió del agua    Para más información sobre el proyecto, esta es su página web:  www.portalcienciayficcion.com ",
        "publisher_date": 2015,
        "pages": 51,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2015/07/portalcienciayficcion-revista5-OpenLibra-326x461.jpg",
        "categories": [{
          "name": "PortalCienciayFicción"
        }]
      }, {
        "title": "Portal Ciencia y Ficción #4",
        "author": "Varios",
        "content": "Portal Ciencia y Ficción es un proyecto creado a finales del 2009, concebido como una plataforma gratuita a disposición de personas interesadas en dar a conocer sus trabajos; ya sea publicando parte o la totalidad de algunas de sus obras, como publicitándolas mediante artículos, entrevistas, etc... También pretende informar sobre un amplio abanico de disciplinas y materias con el mayor rigor posible (tanto científicas como de entretenimiento), así como ofrecer descargas y foros de debate y opinión.  Fruto del trabajo realizado en el portal nace esta publicación, una revista digital gratuita dedicada enteramente al género de la Ciencia Ficción.  Parte de los contenidos de este número son los siguientes:    El ser Humano y la Tecnología  Relato: EVA  Relato: Expediente Cheliábinsk  Entrevista: Raúl Frías  Música de Borg  Guardianes de la Galaxia  Microrelato: Sueños visionarios  Relato: Sr Helder  Cosplay  Entrevista: Fedor Yanine  Reseña: Quayos Caeli Enarrant  Historieta: De la manera correcta  Relato: Sesión  Reseña: El exilio de Sharra  Relato inventado  Nekoland  Videojuego: Saga Fallout  Microrelato: Estrellas  Retroinformática  Esculturas con chatarra  La Tierra en números rojos  Entrevista: José M Maesa  Cortometraje: Similo  Ilustraciones de Asunción Belarte  Relatos por Fernando Cañadas    Para más información sobre el proyecto, esta es su página web:  www.portalcienciayficcion.com ",
        "publisher_date": 2014,
        "pages": 82,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2014/11/portalcienciayficcion-revista4-OpenLibra-325x461.jpg",
        "categories": [{
          "name": "PortalCienciayFicción"
        }]
      }, {
        "title": "Portal Ciencia y Ficción #3",
        "author": "Varios",
        "content": "Portal Ciencia y Ficción es un proyecto creado a finales del 2009, concebido como una plataforma gratuita a disposición de personas interesadas en dar a conocer sus trabajos; ya sea publicando parte o la totalidad de algunas de sus obras, como publicitándolas mediante artículos, entrevistas, etc... También pretende informar sobre un amplio abanico de disciplinas y materias con el mayor rigor posible (tanto científicas como de entretenimiento), así como ofrecer descargas y foros de debate y opinión.  Fruto del trabajo realizado en el portal nace esta publicación, una revista digital gratuita dedicada enteramente al género de la Ciencia Ficción.  Parte de los contenidos de este número son los siguientes:    La Cuarta Ley - Nieves Delgado  Evolución; vida, de qué tipo y dónde - Victor Vila  Curiosidades científicas - Victor Vila  Ser - Fernando Ramos  Crisálida - Victor Vila  Animales asombrosos - Victor Vila  The Kromwell Show - Jorge Villena  Películas que quizá no conozcas - Juanje López  Entrevista: Miguel Santander  Vaspev-I - Luis Alonso Cruz  El beso de Eli - José Javier Martínez  Curiosidades de rodaje  Musco - Cano Farragule  Hacia dentro - Nieves Delgado  OFF - Raúl Ibáñez  Sobre la Ciencia Ficción y los futuros pesimistas - Ronald    Para más información sobre el proyecto, esta es su página web:  www.portalcienciayficcion.com ",
        "publisher_date": 2014,
        "pages": 91,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2014/04/portalcienciayficcion-revista3-OpenLibra-324x461.jpg",
        "categories": [{
          "name": "PortalCienciayFicción"
        }]
      }, {
        "title": "Animación 3D: Recorridos Virtuales",
        "author": "Álvaro Ulldemolins",
        "content": "Este módulo pertenece a la colección de Animación 3D editada por la UOC, centrándose en el análisis y desarrollo de recorridos virtuales en entornos tridimensionales.  Los temas que aquí se tratan son:     Qué es un recorrido virtual  En qué se aplican los recorridos virtuales  Teoría de un recorrido virtual  Tipos de planos  Storyboard  Recorridos interactivos  Tecnologías disponibles  Tipos de cámaras  Anatomía de la cámara 3D  Animación de cámaras a través de un recorrido  Animación clásica key-to-key  Creación de un panorama 360  Render de diferentes cámaras (Batch Render)  ",
        "publisher_date": 2013,
        "pages": 82,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2014/03/Animacion-3D-M5-OpenLibra-325x461.png",
        "categories": [{
          "name": "Diseño / 3D"
        }]
      }, {
        "title": "Guionización de series de animación",
        "author": "Neus Devesa",
        "content": "El proceso de escribir una historia de animación no es muy diferente al proceso de creación de cualquier otra historia, ya sea interpretada por actores de carne y hueso, personajes en 2D o 3D; vaya a ser transmitida por la televisión o el cine, o ser editada en un libro. El punto de arranque, el momento en el que el creador piensa qué quiere narrar, a quién le pasará la historia y qué cosas sucederán no es diferente, sea cual sea la transformación que después se llevará a cabo. Lo que cambia es el desarrollo de la historia. El medio de comunicación por el que se escribe, en cambio, sí que condiciona enormemente el modo como el guionista, en nuestro caso, desarrolla el guión.  Cada producción audiovisual utiliza unos medios, tiene unos recursos determinados para su realización, tanto técnicos, como económicos. Éstos marcan el modo de convertir aquella idea inicial en un producto acabado. En este sentido, es muy diferente si hablamos de rodar un guión con personas e imágenes reales, que si elaboramos una producción de animación. El guionista primeramente debe dominar el medio para el que trabaja, conocer sus ventajas y limitaciones. De acuerdo con el medio deberá adaptar su historia.  Es pues el momento de pasar a la acción y descubrir aquellos elementos que nos ayudarán a escribir una historia coherente, bien estructura y que se pueda convertir en una buena producción audiovisual.",
        "publisher_date": 2011,
        "pages": 62,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2014/03/Guionizacion-de-series-OpenLibra-325x461.png",
        "categories": [{
          "name": "Cine"
        }]
      }, {
        "title": "Haciendo dibujitos en el Fin del Mundo",
        "author": "Varios",
        "content": "Este libro Haciendo dibujitos en el fin del mundo pretende resumir la experiencia reunida durante los primeros cinco años de funcionamiento de la Escuela para Animadores de Rosario.  La Escuela fue fundada en 2006 por una iniciativa conjunta del Centro Audiovisual Rosario y la Isla de los Inventos (instituciones de la Secretaría de Cultura y Educación municipal) y un grupo de animadores independientes y autodidactas que, previamente, habían fundado el taller El Sótano en el mismo local donde solía funcionar el estudio-escuela de Luis Bras. Actualmente, a dicho grupo se han sumado egresados de la Escuela, dándose lugar a la conformación de una cooperativa de trabajo3. En tal sentido, nos proponemos recopilar opiniones e ilustraciones elaboradas por los docentes de la Escuela sobre los contenidos que se despliegan cada año a lo largo del curso y citar artículos o párrafos de referentes notables que consideramos imprescindibles y esclarecedores.  El objetivo de la Escuela es reunir cada año a treinta dibujantes, interesados en poner sus dibujos en movimiento para contar historias. En una ciudad que no tuvo y no tiene un desarrollo industrial en la producción de dibujos animados y en medio de una acelerada evolución de las herramientas digitales  para realizar y distribuir bienes audiovisuales, nuestra apuesta es poner el foco sobre el animador, sus motivaciones, su sensibilidad y su visión particular de la realidad, valorando la diversidad y la condición humana.",
        "publisher_date": 2011,
        "pages": 101,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2014/03/Haciendo-dibujitos-en-el-fin-del-mundo-OpenLibra-350x432.jpg",
        "categories": [{
          "name": "Cine"
        }]
      }, {
        "title": "Música e Imágenes hasta la llegada del Cine",
        "author": "Montserrat Armell Femenía & Antonio Ezquerro Esteban",
        "content": "La \"pre-historia\" del cine hablado, en lo relativo a la coordinación de imágenes en movimiento y setido, supone un período extensísimo de tiempo, que abarca miles de años, desde la ilustración sonora de sombras proyectadas documentada en la antigua China, hasta prácticamente los albores del cinematógrafo, un avance tecnológico impensable &mdash; hoy en día más que nunca &mdash; sin la aportación que música y sonido han hecho al denominado séptimo arte.  El presente trabajo pretende ofrecer una panorámica de lahistoria de la &mdash;documentadamente inconexa, aunque continua&mdash; preocupación humana por fijar el movimiento de un modo visual y sonoro a un tiempo, prestando particular atención a algunos logros técnicos de especial relevancia (la linterna mágica, la armónica de cristal, las fantasmagorías, el teatro de sombras), dentro del recorrido que facilitaría, ya entrado el siglo XX, el nacimiento del cine sonoro. Una mera introducción a un mundo fascinante y deplena actualidad, que, en el terreno puramente musicológico, por lo prácticamente virgen a fecha de hoy (y la escasísima y marginal bibliografía al respecto es la mayor prueba de ello), precisaría de nuevos y más detallados estudios. ",
        "publisher_date": 2003,
        "pages": 75,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2014/01/Musica-e-imagenes-hasta-la-llegada-del-cine-OpenLibra-350x459.gif",
        "categories": [{
          "name": "Arte - Bellas Artes"
        }]
      }, {
        "title": "La biometría para la identificación de las personas",
        "author": "Francesc Serratosa",
        "content": "La biometría es una ciencia que analiza las distancias y posiciones entre las partes del cuerpo para poder identificar o clasificar a las personas.  Hay varios rasgos biométricos que hoy en día se usan para tal fin, como las huellas dactilares, la cara, el iris, la mano, la retina o la firma. La biometría, y más en concreto las huellas dactilares, ya se estudiaban a finales del siglo XIX en aplicaciones forenses, es decir, para tratar de identificar a criminales o la identidad de las personas. En la actualidad, no solo se usa en estas aplicaciones sino en otras, como el control en los aeropuertos, en los accesos a centrales nucleares o a instalaciones militares o incluso, simplemente, para acceder a las oficinas o a la piscina municipal. Este es el motivo por el que la biometría está entrando en nuestras vidas cotidianas y es necesario que los informáticos o ingenieros en general tengan unos mínimos conocimientos sobre la materia.  Con el objetivo de aumentar la fiabilidad de los sistemas biométricos, en algunas aplicaciones se fusionan varios rasgos biométricos.  El objetivo final de incorporar un sistema biométrico dentro de otro sistema es aumentar la seguridad de este segundo sistema. Por este motivo, es importante estudiar que el sistema biométrico en sí no tenga grietas por donde se pueda vulnerar la seguridad de todo el sistema en general.",
        "publisher_date": 2012,
        "pages": 50,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2014/01/Biometria-para-identificacion-personas-OpenLibra-325x461.gif",
        "categories": [{
          "name": "Seguridad"
        }]
      }, {
        "title": "El Cosmonauta",
        "author": "Nicolás Alcalá",
        "content": "¿Y si volvieses a casa... y ya no hubiese nadie?  En 1975, el primer cosmonauta ruso en la Luna no consigue regresar, y se le da por perdido en el espacio. Él, sin embargo, a través de fantasmales mensajes de radio, clama haber vuelto a la Tierra y haberla encontrado vacía, sin un alma.  Su irreal presencia y su voz irán destruyendo poco a poco el mundo de sus seres queridos.  El Cosmonauta (The Cosmonaut ) es una película española de ciencia ficción, o de historia ficción, estrenada en mayo de 2013. Fue filmada en Letonia, Rusia y España, en idioma inglés. Ambientada en la antigua Unión Soviética durante la época de la carrera espacial, en un supuesto viaje a la Luna.  Financiada en gran parte mediante la fórmula del micromecenazgo o financiación colectiva a través de pequeñas donaciones. En su distribución recurre simultáneamente a todos los sistemas: estreno convencional en salas de cine, emisión en TV, venta de libro con DVD, y acceso gratis en Internet.",
        "publisher_date": 2010,
        "pages": 68,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2013/11/El-Cosmonauta-OpenLibra-350x459.gif",
        "categories": [{
          "name": "Cine"
        }]
      }, {
        "title": "Portal Ciencia y Ficción #2",
        "author": "Varios",
        "content": "Portal Ciencia y Ficción es un proyecto creado a finales del 2009, concebido como una plataforma gratuita a disposición de personas interesadas en dar a conocer sus trabajos; ya sea publicando parte o la totalidad de algunas de sus obras, como publicitándolas mediante artículos, entrevistas, etc... También pretende informar sobre un amplio abanico de disciplinas y materias con el mayor rigor posible (tanto científicas como de entretenimiento), así como ofrecer descargas y foros de debate y opinión.  Fruto del trabajo realizado en el portal nace esta publicación, una revista digital gratuita dedicada enteramente al género de la Ciencia Ficción.  Parte de los contenidos de este número son los siguientes:    Relatos: Víctor Vila, Ricardo Manzanaro, Álvaro de la Riva, Nieves Delgado, Fernando Cañadas, Fernando Schekaiban  Curiosidades científicas - Víctor Vila  Historieta: Non.Plus.Ultra - El Irra  ¿Vivimos en una simulación? - Víctor Vila  Películas que quizás no conozcas - Juanje López  Saga Pandoran Age - Pablo Montagudo  Curiosidades de rodaje - Víctor Vila  Videojuego: Deadspace - Carlos Climent  Cine: Oblivion - Víctor Vila  Poesía: Almas de metal - Víctor Vila  Historieta: Lluvia - Damian Horacio  El renacer de los Homo Sapiens Perpetuus - Fernando Jiménez  Entrevista a Sergio Palacios - Nieves Delgado  Evento: Gatercon 2.0 - Vicente Hernándiz    Para más información sobre el proyecto, esta es su página web:  www.portalcienciayficcion.com ",
        "publisher_date": 2013,
        "pages": 105,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2013/11/portalcienciayficcion-revista2-OpenLibra-325x461.jpg",
        "categories": [{
          "name": "PortalCienciayFicción"
        }]
      }, {
        "title": "Portal Ciencia y Ficción #1",
        "author": "Varios",
        "content": "Portal Ciencia y Ficción es un proyecto creado a finales del 2009, concebido como una plataforma gratuita a disposición de personas interesadas en dar a conocer sus trabajos; ya sea publicando parte o la totalidad de algunas de sus obras, como publicitándolas mediante artículos, entrevistas, etc... También pretende informar sobre un amplio abanico de disciplinas y materias con el mayor rigor posible (tanto científicas como de entretenimiento), así como ofrecer descargas y foros de debate y opinión.  Fruto del trabajo realizado en el portal nace esta publicación, una revista digital gratuita dedicada enteramente al género de la Ciencia Ficción.  El contenido de este número es el siguiente:    Relato: El ángel exterminador - Raúl Frías  Ilustración - Francisco Javier  Entrevista: Jon Mikel Caballero (Director) - Víctor Vila  Artículo: Transhumanismo - Nieves Delgado  Relato: Estación espacial UVR - Víctor Vila  Dibujos - Francisco Javier  Videojuego: Proyecto Nemesis - Víctor Vila  Cine: Blade runner - Koldobika Ascaso  Relato: La pregunta correcta - Nieves Delgado  Entrevista: Fedor Yanine (Novelista) - Víctor Vila  Dibujos - Francisco Javier  Relato (Serie): Esperanza - Danny Díaz  Artículo: Chips cerebrales inminentes - Víctor Vila  Relato: La condena - Nieves Delgado  Videojuego: Mass Effect - Danny Díaz  Relato: Multiverso - Fedor Yanine  Cine: Prometheus - Víctor Vila  Artículo: Edad de oro del Software Español - Carlos Climent  Ilustración y dibujos - Francisco Javier    Para más información sobre el proyecto, esta es su página web:  www.portalcienciayficcion.com ",
        "publisher_date": 2013,
        "pages": 64,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2013/11/portalcienciayficcion-revista1-OpenLibra-325x461.jpg",
        "categories": [{
          "name": "PortalCienciayFicción"
        }]
      }, {
        "title": "Teoría y práctica del cine como dispositivo crítico",
        "author": "Ana Rodriguez Granell",
        "content": "Abordar las cinematografías políticas de la primera mitad del siglo XX parte de un interés por un marco mucho más amplio e inabarcable como son las relaciones entre la cultura y la sociedad. Creemos pues que, detectar las formas de lo político, ha de partir de un análisis que comprenda cómo se constituyen ciertos discursos y relatos y qué relaciones establecen con las estructuras que componen el campo social y cultural, con el objetivo de visibilizar cómo se estabilizan ciertos órdenes y, a la vez, cómo emergen ciertas transgresiones frente a este orden. Quizá no estemos más que reverberando las preguntas que emergen tras la IIGM, en la disciplina de la historia del arte, acerca de cómo ciertos fenómenos, en este caso las producciones culturales, se revelan como parte de la realidad social y abarcan cuestiones que van más allá de los \"grovigli esistenziali\" individuales.  Sea como sea, una de las cuestiones con las que el lector de esta investigación se encontrará, va a ser la del alcance de la modernidad y las tensiones entre las formas de pensamiento afirmativo y negativo que emergen en ella como formas de entender la producción de subjetividades.  De cara a exponer -o justificar- la elección del título hemos hecho uso de un concepto que ha tenido indudable fortuna en los estudios sobre la imagen como es el de dispositivo.",
        "publisher_date": 2012,
        "pages": 720,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2013/09/Teoria-y-practica-del-cine-como-dispositivo-critico-OpenLibra-350x459.gif",
        "categories": [{
          "name": "Cine"
        }]
      }, {
        "title": "Estudios sobre Arte y Comunicación Social",
        "author": "José Luis Crespo Fajardo (Coord.)",
        "content": "Desde finales del siglo XIX, con el desarrollo de los medios de comunicación, la prensa, propaganda, anuncios, carteles y publicidad en general, aquellas tradicionales relaciones existentes entre arte y sociedad se han ido haciendo cada vez más complejas.  En nuestros días la unión entre los distintos medios de comunicación y la actividad artística es indivisible, no pueden entenderse por separado. Podemos encontrar arte en cualquier imagen de las que nos ofrecen diariamente los medios de comunicación. Ciertamente, son elementos propios del arte los que estimulan la sugestión, atracción y capacidad de sorpresa de la imagen publicitaria, capaz de determinar la aceptación de un determinado producto, su influencia en distintos gustos y modas. Diseñar, efectivamente, es el arte de transmitir el valor del producto a través de la concreción d e una serie de valores estéticos.  Por otro lado, hoy asistimos a una época de esplendor comunicativo, con el gran auge de las nuevas tecnologías y sus herramientas de conexión social. A través de estos cauces nuevas vías se abren para la expresión artística. Todas estas sugerentes ideas en las que numerosos expertos trabajan en la actualidad hacen de las Bellas Artes una fuente de inspiración inagotable para los nuevos investigadores en comunicación social, recuperando estéticas o contrastando datos del presente.  La obra Estudios sobre arte y comunicación social, coordinada por el Dr. José Luis Crespo Fajardo, es una muestra de toda esta ebullición investigadora tan apasionante como novedosa. El que por fin exista este libro colectivo como plataforma de encuentro es una gran iniciativa para dar a conocer las investigaciones internacionales al respecto, las más actuales y de calidad. Es un proyecto que alabamos desde nuestra universidad hispalense y a cuyos autores deseamos el reconocimiento que sin lugar a dudas merecen.",
        "publisher_date": 2012,
        "pages": 139,
        "cover": "http://collection.openlibra.com.s3.amazonaws.com/covers/2013/06/Estudios-sobre-Arte-y-Comunicacion-Social-OpenLibra-325x461.jpg",
        "categories": [{
          "name": "Arte - Bellas Artes"
        }]
      }, {
        "title": "Clases de Cine: Compartir miradas en femenino y masculino",
        "author": "Andrea García González",
        "content": "Decir que algo es “de cine” significa que es estupendo. El título Clases de cine contiene un triple mensaje: que las clases pueden ser estupendas; que en ellas se puede enseñar y aprender a ver y hacer cine y que hay muchas clases de cine, entre ellas, cada vez más interesante, el cine realizado por mujeres.  La emoción de entrar en una sala de cine para ver películas, se entremezcla hoy con otras muchas maneras de acceder a ellas: por televisión, en el ordenador, en el móvil y en pantallas grandes situadas en lugares públicos. Son formas distintas, pero todas ellas tienen algo que nos atrae y nos permite ampliar nuestra imaginación, fantasía y conocimiento del mundo.  El cine lo hacen y lo ven mujeres y hombres, es decir seres humanos con cuerpos y experiencias distintas, significativas para nuestras vidas. La experiencia audiovisual de ver una película implica a la mayor parte de los sentidos de las mujeres y los hombres, las imágenes llegan a nuestra mente a partir de lo que perciben nuestros ojos, las voces, los sonidos y la banda sonora de la película nos llega a través de la resonancia que producen en nuestros oídos; el tacto y el gusto, o sus sensaciones evocadas, lo genera nuestra mente cuando se entremezclan vista y oído en nuestros cuerpos. Esta relación de sensaciones y sentidos llegan hasta mí y hasta ti, a nuestros cuerpos y mentes sin barreras, por lo que es importante acompañar y orientar en ese mirar al cine, a las imágenes en movimiento como una parte más de la experiencia educativa.",
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