const word = document.getElementById('word')
const wrongWord = document.getElementById('wrong-word')
const finalMesseage = document.getElementById('final-message')
const notification = document.getElementById('notif')
const popup = document.getElementById('popup-container')
const figure = document.querySelectorAll('.figure-show')
const playBtn = document.getElementById('btn-play')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const imageEl = document.getElementById('image')
const audio = document.getElementById('audio')
const levelEl = document.getElementById('caption')
const flag = document.getElementById('flag')
let nameGame = document.getElementById('name')
const prelude = document.getElementById('prelude-container')
const startGame = document.getElementById('btn-start')
const preludeMsg = document.getElementById('prelude-message')

//** Data Section ***/
let country = [{name:'چین',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/cn.png'},{name:'کویت',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/kw.png'},{name:'سوریه',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/sy.png'},
{name:'ترکمنستان',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/tm.png'},{name:'عربستان',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/sa.png'},{name:'تاجیکستان',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/tj.png'},
{name:'عمان',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/om.png'},{name:'پرو',region: 'img/south-america.png',flag:'https://flagcdn.com/72x54/pe.png'},{name:'پاناما',region: 'img/north-america.jpg',flag:'https://flagcdn.com/72x54/pa.png'},
{name:'کلمبیا',region: 'img/south-america.png',flag:'https://flagcdn.com/72x54/co.png'},{name:'اکوادور',region: 'img/south-america.png',flag:'https://flagcdn.com/72x54/ec.png'},{name:'ایتالیا',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/it.png'},
{name:'برزیل',region: 'img/south-america.png',flag:'https://flagcdn.com/72x54/br.png'},{name:'آرژانتین',region: 'img/south-america.png',flag:'https://flagcdn.com/72x54/ar.png'},{name:'سوئد',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/se.png'},
{name:'ژاپن',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/jp.png'},{name:'عراق',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/iq.png'},{name:'یمن',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/ye.png'},
{name:'پاکستان',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/pk.png'},{name:'کانادا',region: 'img/north-america.jpg',flag:'https://flagcdn.com/72x54/ca.png'},{name:'امارات',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/ae.png'},
{name:'لبنان',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/lb.png'},{name:'اتریش',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/at.png'},{name:'اسکاتلند',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/gb-sct.png'},
{name:'نروژ',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/no.png'},{name:'مراکش',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/ma.png'},{name:'مکزیک',region: 'img/north-america.jpg',flag:'https://flagcdn.com/72x54/mx.png'},
{name:'مالدیو',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/mv.png'},{name:'مالت',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/mt.png'},{name:'اسپانیا',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/es.png'},
{name:'فرانسه',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/fr.png'},{name:'انگلستان',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/gb.png'},{name:'مجارستان',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/hu.png'},
{name:'ایرلند',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/ie.png'},{name:'آمریکا',region: 'img/north-america.jpg',flag:'https://flagcdn.com/72x54/us.png'},{name:'الجزایر',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/dz.png'},
{name:'افغانستان',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/af.png'},{name:'هند',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/in.png'},{name:'قزاقستان',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/kz.png'},
{name:'مغولستان',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/mn.png'},{name:'ایران',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/ir.png'},{name:'کرهجنوبی',region:'img/asia.jpg',flag:'https://flagcdn.com/72x54/kr.png'},
{name:'برمه',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/mm.png'},{name:'تایوان',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/tw.png'},{name:'کامبوج',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/kh.png'},
{name:'بحرین',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/bh.png'},{name:'شیلی',region: 'img/south-america.png',flag:'https://flagcdn.com/72x54/cl.png'},{name:'اروگوئه',region: 'img/south-america.png',flag:'https://flagcdn.com/72x54/uy.png'},
{name:'بولیوی',region: 'img/south-america.png',flag:'https://flagcdn.com/72x54/bo.png'},{name:'تونس',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/tn.png'},{name:'نیجریه',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/ng.png'},
{name:'کامرون',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/cm.png'},{name:'بلغارستان',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/bg.png'},{name:'بوتان',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/bt.png'},
{name:'نیوزلند',region: 'img/oceania.jpg',flag:'https://flagcdn.com/72x54/nz.png'},{name:'استرالیا',region: 'img/oceania.jpg',flag:'https://flagcdn.com/72x54/au.png'},{name:'غنا',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/gh.png'},
{name:'توگو',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/tg.png'},{name:'سنگال',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/sn.png'},{name:'مصر',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/eg.png'},
{name:'فنلاند',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/fi.png'},{name:'لهستان',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/pl.png'},{name:'ترکیه',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/tr.png'},
{name:'ولز',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/gb-wls.png'},{name:'نپال',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/np.png'},{name:'اندونزی',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/id.png'},
{name:'تایلند',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/th.png'},{name:'کنیا',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/ke.png'},{name:'اتیوپی',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/et.png'},
{name:'فلسطین',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/ps.png'},{name:'دانمارک',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/dk.png'},{name:'رومانی',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/ro.png'},
{name:'پرتغال',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/pt.png'},{name:'اسلوونی',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/si.png'},{name:'فیلیپین',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/ph.png'},
{name:'سنگاپور',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/sg.png'},{name:'ویتنام',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/vn.png'},{name:'قبرس',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/cy.png'},
{name:'آلبانی',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/al.png'},{name:'السالوادور',region: 'img/north-america.jpg',flag:'https://flagcdn.com/72x54/sv.png'},{name:'استونی',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/ee.png'},
{name:'روسیه',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/ru.png'},{name:'سریلانکا',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/lk.png'},{name:'آذربایجان',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/az.png'},
{name:'گویان',region: 'img/south-america.png',flag:'https://flagcdn.com/72x54/gy.png'},{name:'اسلواکی',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/si.png'},{name:'کرواسی',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/hr.png'},
{name:'سورینام',region: 'img/south-america.png',flag:'https://flagcdn.com/72x54/sr.png'},{name:'کاستاریکا',region: 'img/north-america.jpg',flag:'https://flagcdn.com/72x54/cr.png'},{name:'باربادوس',region: 'img/north-america.jpg',flag:'https://flagcdn.com/72x54/bb.png'},
{name:'لوکزامبورگ',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/lu.png'},{name:'مولداوی',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/md.png'},{name:'آلمان',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/de.png'},
{name:'هندوراس',region: 'img/north-america.jpg',flag:'https://flagcdn.com/72x54/hn.png'},{name:'موناکو',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/mc.png'},{name:'یونان',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/gr.png'},
{name:'باهاما',region: 'img/north-america.jpg',flag:'https://flagcdn.com/72x54/bs.png'},{name:'جیبوتی',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/dj.png'},{name:'آنگولا',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/ao.png'},
{name:'چاد',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/td.png'},{name:'سودان',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/sd.png'},{name:'اوگانادا',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/ug.png'},
{name:'کومور',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/km.png'},{name:'هلند',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/nl.png'},{name:'صربستان',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/rs.png'},
{name:'واتیکان',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/va.png'},{name:'لتونی',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/lv.png'},{name:'ایسلند',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/is.png'},
{name:'لیبی',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/ly.png'},{name:'فیجی',region: 'img/oceania.jpg',flag:'https://flagcdn.com/72x54/fj.png'},{name:'پالائو',region: 'img/oceania.jpg',flag:'https://flagcdn.com/72x54/pw.png'},
{name:'گوام',region: 'img/oceania.jpg',flag:'https://flagcdn.com/72x54/gu.png'},{name:'لائوس',region: 'img/asia.jpg',flag:'https://flagcdn.com/72x54/la.png'},{name:'بلژیک',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/be.png'},
{name:'لیبریا',region: 'img/africa.png',flag:'https://flagcdn.com/72x54/lr.png'},{name:'گرجستان',region: 'img/europe.jpg',flag:'https://flagcdn.com/72x54/ge.png'},{name:'کوبا',region: 'img/south-america.png',flag:'https://flagcdn.com/72x54/cu.png'}];

let city = [{name:'موناکو',region: 'https://s2.best-wallpaper.net/wallpaper/iphone/1707/Ligurian-sea-Monaco-city-skyscrapers_iphone_640x1136.jpg',flag:'https://flagcdn.com/72x54/mc.png'},{name:'نایروبی',region: 'https://lifepart2.com/wp-content/uploads/2020/11/Nairobi-Kenya-1024x528.jpg',flag:'https://flagcdn.com/72x54/ke.png'},{name:'اسلو',region: 'https://www.msccruisesusa.com/-/media/global-contents/destinations/ports/norway/oslo/cruise-to-oslo-norway.jpg?bc=transparent&as=1&dmc=0&iar=0&mh=537&mw=806&sc=0&thn=0&udi=0&hash=932F6539B9F7111BA37B3661C4008A72',flag:'https://flagcdn.com/72x54/no.png'},
{name:'پکن',region: 'https://image.freepik.com/free-photo/night-bridge-nanjing-city-skyline-china_1112-6929.jpg',flag:'https://flagcdn.com/72x54/cn.png'},{name:'توکیو',region: 'https://i.pinimg.com/originals/7c/4d/b0/7c4db0c1d7875e6ee20002ea9ea2e051.jpg',flag:'https://flagcdn.com/72x54/jp.png'},{name:'تهران',region: 'https://d1bvpoagx8hqbg.cloudfront.net/originals/experience-tehran-iran-saba-4f108124118283cf9f0255351ba208ce.jpg',flag:'https://flagcdn.com/72x54/ir.png'},
{name:'نیویورک',region: 'https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2560%2Cc_limit/GettyImages-946087016.jpg',flag:'https://flagcdn.com/72x54/us.png'},{name:'منچستر',region: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3d/31/60/manchester-town-hall.jpg?w=700&h=-1&s=1',flag:'https://flagcdn.com/72x54/gb.png'},{name:'شیراز',region: 'https://media.mehrnews.com/d/2018/10/06/4/2918786.jpg',flag:'https://flagcdn.com/72x54/ir.png'},
{name:'پاریس',region:'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',flag:'https://flagcdn.com/72x54/fr.png'},{name:'لندن',region:'https://tr-images.condecdn.net/image/BXw9eeMnlnw/crop/1620/f/view-of-river-thames-big-ben-london-eye-london-conde-nast-traveller-29oct14-alamy.jpg',flag:'https://flagcdn.com/72x54/gb.png'},
{name:'بروکسل',region: 'https://www.brussels.info/img/city-centre/brussels-city-center-600x450.jpg',flag:'https://flagcdn.com/72x54/be.png'},{name:'مادرید',region: 'https://img.blogs.es/smartcitylab/wp-content/uploads/2019/07/dowtown-madrid-spain-1920x960.jpg',flag:'https://flagcdn.com/72x54/es.png'},{name:'بارسلون',region: 'https://i.pinimg.com/originals/a2/3e/c4/a23ec4464e6f1d220805bc65653e01f2.jpg',flag:'https://flagcdn.com/72x54/es.png'},
{name:'برلین',region: 'https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2016/11/24111943/Berlin-city-view.jpg',flag:'https://flagcdn.com/72x54/de.png'},{name:'مسکو',region: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Business_Centre_of_Moscow_2.jpg',flag:'https://flagcdn.com/72x54/ru.png'},{name:'جاکارتا',region: 'https://static.dezeen.com/uploads/2019/05/jakarta-indonesia-dezeen-hero.jpg',flag:'https://flagcdn.com/72x54/id.png'},
{name:'دمشق',region: 'https://cdn.britannica.com/61/178161-050-D3D4BACC/Damascus-Syria.jpg',flag:'https://flagcdn.com/72x54/sy.png'},{name:'دوشنبه',region: 'https://i.ytimg.com/vi/9C_KK0t3CbM/maxresdefault.jpg',flag:'https://flagcdn.com/72x54/tj.png'},{name:'ریاض',region: 'https://i.pinimg.com/originals/38/1d/5b/381d5b39f4cf982d3bc779463073b0b1.jpg',flag:'https://flagcdn.com/72x54/sa.png'},
{name:'ریودوژانیرو',region: 'https://www.pandotrip.com/wp-content/uploads/2013/07/Untitled-62-980x613.jpg',flag:'https://flagcdn.com/72x54/br.png'},{name:'هلسینکی',region: 'https://scwcontent.affino.com/AcuCustom/Sitename/DAM/015/Heksinki_AdobeStock_56312148.jpg',flag:'https://flagcdn.com/72x54/fi.png'},{name:'بانکوک',region: 'http://thailand-construction.com/wp-content/uploads/2019/04/The-coming-of-new-Bangkok-city-plan-in-2020-1.jpg',flag:'https://flagcdn.com/72x54/th.png'},
{name:'لیسبون',region: 'https://i.guim.co.uk/img/media/bf48c81421313e74475763bd7dcbe9ac6735de97/388_666_6112_3668/master/6112.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=82a620182f39342739d1401ab488ff44',flag:'https://flagcdn.com/72x54/pt.png'},{name:'تفلیس',region: 'https://blog.radissonblu.com/wp-content/uploads/2015/09/Panoramic-view-of-Tbilisi-Georgia.jpg',flag:'https://flagcdn.com/72x54/ge.png'},{name:'آمستردام',region:'https://www.cruise-international.com/wp-content/uploads/2018/06/Amsterdam-canals.jpg',flag:'https://flagcdn.com/72x54/nl.png'},
{name:'ورشو',region: 'https://www.essentialhome.eu/inspirations/wp-content/uploads/2018/07/This-Charming-Country-Colorful-Cities-around-Poland.png',flag:'https://flagcdn.com/72x54/pl.png'},{name:'تورنتو',region: 'https://cdn.britannica.com/93/94493-050-35524FED/Toronto.jpg',flag:'https://flagcdn.com/72x54/ca.png'},{name:'سیدنی',region: 'https://www.outlookindia.com/outlooktraveller//public/uploads/articles/explore/Sydney-city-Skyline,-feature-image.gif',flag:'https://flagcdn.com/72x54/au.png'},
{name:'کانبرا',region: 'https://media.istockphoto.com/photos/aerial-view-of-canberra-from-belconnen-in-the-morning-picture-id1083098468?k=6&m=1083098468&s=612x612&w=0&h=CFJ-U3TrhxuGCobYmp1_hXGg283qWCoh1GUN8pzAPZ8=',flag:'https://flagcdn.com/72x54/au.png'},{name:'صوفیه',region: 'https://use.metropolis.org/system/images/436/article/1024px-Downtown_Sofia_Boby_Dimitrov_1_1_.png',flag:'https://flagcdn.com/72x54/bg.png'},{name:'سانتیاگو',region: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Santiago_City%2C_Isabela_aerial_photo_2014.jpg',flag:'https://flagcdn.com/72x54/cl.png'},
{name:'دهلی',region: 'https://i.pinimg.com/originals/ff/c2/b2/ffc2b225450a8a6728c3e199328265b8.jpg',flag:'https://flagcdn.com/72x54/in.png'},{name:'بمبئی',region: 'https://img.etimg.com/thumb/msid-65884121,width-640,resizemode-4,imgsize-175447/city-of-contradictions.jpg',flag:'https://flagcdn.com/72x54/in.png'},{name:'استانبول',region: 'https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2018/10/26171002/shutterstock_291252509-870x400.jpg',flag:'https://flagcdn.com/72x54/tr.png'},
{name:'قاهره',region: 'https://i.pinimg.com/originals/81/01/80/8101807a86fb2e97def0c1291363eec7.jpg',flag:'https://flagcdn.com/72x54/eg.png'},{name:'باکو',region: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/9b/16.jpg',flag:'https://flagcdn.com/72x54/az.png'},{name:'مونیخ',region: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1200px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',flag:'https://flagcdn.com/72x54/de.png'},
{name:'لیما',region: 'https://thumbs.dreamstime.com/z/lima-city-panoramic-view-152859408.jpg',flag:'https://flagcdn.com/72x54/pe.png'},{name:'مدینه',region: 'https://lh3.googleusercontent.com/aBe-IPnfZ6ISJTel1GHDx3tDMk0mcBULsf5Md6vi5pi3GL-uit0nrdTAplA7FDw-dTdkO8cEDhpnsufqH_h8-1eQkyzRn7bOkSoUezaB8SbEuti0Qyf9VsMLpcOGBPKzw8gTYoLLoPHy8gmLmA',flag:'https://flagcdn.com/72x54/sa.png'},{name:'آتن',region: 'https://www.ucityguides.com/images/city-guides/athens-greece.jpg',flag:'https://flagcdn.com/72x54/gr.png'},
{name:'کاتماندو',region:'https://www.eligasht.com/Blog/wp-content/uploads/2018/03/Kathmandu-Durbar-Square.jpg',flag:'https://flagcdn.com/72x54/np.png'},{name:'اتاوا',region: 'https://www.baywardbulletin.ca/wp-content/uploads/2019/03/City-of-Ottawa-1000x500.jpg',flag:'https://flagcdn.com/72x54/ca.png'},{name:'برن',region: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Central_Bern_from_north.jpg',flag:'https://flagcdn.com/72x54/ch.png'},
{name:'هاوانا',region: 'https://static.insightcuba.com/sites/default/files/insightcubablog_vedado_hotelnational.jpg',flag:'https://flagcdn.com/72x54/cu.png'},{name:'بیروت',region: 'https://media.istockphoto.com/photos/aerial-view-of-beirut-lebanon-city-of-beirut-picture-id635840812?k=6&m=635840812&s=612x612&w=0&h=60EYN3PmMSmzfkM2Ej7f7RYaNpTQjNw6l9jLYu4sfOk=',flag:'https://flagcdn.com/72x54/lb.png'},{name:'تگزاس',region: 'https://www.rd.com/wp-content/uploads/2020/12/GettyImages-1040011128-e1608652855115.jpg',flag:'https://flagcdn.com/72x54/us.png'},
{name:'هانوی',region: 'https://www.cruisemapper.com/images/ports/4681-d71583f153b.jpg',flag:'https://flagcdn.com/72x54/vn.png'},{name:'سئول',region: 'https://www.webuildvalue.com/wp-content/uploads/seoul-megacity-crescita-sostenibile.jpg',flag:'https://flagcdn.com/72x54/kr.png'},{name:'رم',region: 'https://www.ucityguides.com/images/city-guides/rome-italy.jpg',flag:'https://flagcdn.com/72x54/it.png'},{name:'دوحه',region: 'https://web-assets.bcg.com/dims4/default/8952e58/2147483647/strip/true/crop/1037x590+7+0/resize/601x342!/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2Ffe%2F7c%2F185d1fcdbe727e0a50fd29bf09df%2Fdoha-office-tcm9-212955.jpg',flag:'https://flagcdn.com/72x54/qa.png'},
{name:'مانیل',region: 'https://images.mansionglobal.com/im-204467?width=1280&size=1',flag:'https://flagcdn.com/72x54/ph.png'},{name:'میلان',region: 'https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2018/07/18174234/Milan-Cathedral.jpg',flag:'https://flagcdn.com/72x54/it.png'},{name:'مسقط',region: 'https://cdn.britannica.com/70/188370-050-EE6758B6/Muscat-Oman.jpg',flag:'https://flagcdn.com/72x54/om.png'},
{name:'کپنهاگن',region: 'https://www.adequatetravel.com/blog/wp-content/uploads/2019/03/denmark-123735_1920.jpg',flag:'https://flagcdn.com/72x54/dk.png'},{name:'کابل',region: 'https://af.shafaqna.com/wp-content/uploads/2020/07/FB_IMG_1595741845484.jpg',flag:'https://flagcdn.com/72x54/af.png'},{name:'دوبلین',region: 'https://www.dublincity.ie/sites/default/files/styles/widescreen_television/public/2020-08/residential-banner-image.jpg?h=a78000c5&itok=oT39yIgB',flag:'https://flagcdn.com/72x54/ie.png'},
{name:'بوداپست',region: 'https://scwcontent.affino.com/AcuCustom/Sitename/DAM/014/Budapest_Adobe.jpg',flag:'https://flagcdn.com/72x54/hu.png'},{name:'عدن',region: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Aden._Steamer_Point._Aug_2013_%289727325813%29.jpg',flag:'https://flagcdn.com/72x54/ye.png'},{name:'مارسی',region: 'https://www.francetoday.com/wp-content/uploads/2019/03/MARSEILLE-VIEUX-PORT-Fotolia_113840343_L.jpg',flag:'https://flagcdn.com/72x54/fr.png'},
{name:'بوخارست',region: 'https://www.onhisowntrip.com/wp-content/uploads/2020/08/Romania-Insider.jpg',flag:'https://flagcdn.com/72x54/ro.png'},{name:'آنکارا',region: 'https://cdn.britannica.com/50/198450-050-3554B2AF/Ankara-Turkey.jpg',flag:'https://flagcdn.com/72x54/tr.png'},{name:'منامه',region: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Bahrain_World_trade_Center_.jpg',flag:'https://flagcdn.com/72x54/bh.png'},
{name:'بلگراد',region: 'https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2019/06/24104538/Belgrade-Night-Panorama.jpg',flag:'https://flagcdn.com/72x54/rs.png'},{name:'بغداد',region: 'https://upload.wikimedia.org/wikipedia/commons/5/52/%D9%85%D8%AC%D8%B3%D8%B1_%D8%A7%D9%84%D9%85%D9%81%D8%B1%D9%82.jpg',flag:'https://flagcdn.com/72x54/iq.png'},{name:'ابوظبی',region: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/66/13/7f.jpg',flag:'https://flagcdn.com/72x54/ae.png'},
{name:'کیپتاون',region: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/1e/cape-town.jpg?w=700&h=-1&s=1',flag:'https://flagcdn.com/16x12/za.png'},{name:'دوبروونیک',region: 'https://mediaim.expedia.com/destination/1/eafb2aec38172688505670a58e3c4a63.jpg?impolicy=fcrop&w=536&h=384&q=high',flag:'https://flagcdn.com/72x54/hr.png'},{name:'ادینبرو',region: 'https://www.bl.uk/britishlibrary/~/media/bl/global/british%20accents%20and%20dialects/collection%20items%20sound%20clips/edinburgh-sir-malcolm-recalls-his-schooldays.jpg',flag:'https://flagcdn.com/72x54/gb-sct.png'}];

let place = [{name:'نیل',region: 'img/Level3/Nile.jpg',flag:'https://flagcdn.com/72x54/eg.png'},{name:'آمازون',region:'img/Level3/amazon.jpg',flag:'https://flagcdn.com/72x54/br.png'},
{name:'یانگتسه',region: 'img/Level3/yangtese.jpg',flag:'https://flagcdn.com/72x54/cn.png'},{name:'اهرامثلاثه',region:'img/Level3/pyramid.jpg',flag:'https://flagcdn.com/72x54/eg.png'},
{name:'دانوب',region: 'img/Level3/danub.jpg',flag:'https://flagcdn.com/72x54/de.png'},{name:'دن',region:'img/Level3/don.jpg',flag:'https://flagcdn.com/72x54/ru.png'},{name:'المپیا',region:'img/Level3/olympia.jpg',flag:'https://flagcdn.com/72x54/gr.png'},
{name:'اروندرود',region: 'img/Level3/arvand.jpg',flag:'https://flagcdn.com/72x54/ir.png'},{name:'تاجمحل',region:'img/Level3/tajmahal.jpg',flag:'https://flagcdn.com/72x54/in.png'},
{name:'اورست',region: 'img/Level3/everest.gif',flag:'https://flagcdn.com/72x54/np.png'},{name:'دماوند',region: 'img/Level3/damavand.jpg',flag:'https://flagcdn.com/72x54/ir.png'},
{name:'فوجی',region: 'img/Level3/foji.jpg',flag:'https://flagcdn.com/72x54/jp.png'},{name:'برجایفل',region:'img/Level3/eifel.jpg',flag:'https://flagcdn.com/72x54/fr.png'},
{name:'کلیمانجارو',region: 'img/Level3/kelimanjaro.jpg',flag:'https://flagcdn.com/72x54/tz.png'},{name:'خزر',region: 'img/Level3/khazar.jpg',flag:'https://flagcdn.com/72x54/ir.png'},
{name:'ویکتوریا',region: 'img/Level3/victoria.jpg',flag:'https://flagcdn.com/72x54/ug.png'},{name:'آکروپلیس',region:'img/Level3/acropolis.jpg',flag:'https://flagcdn.com/72x54/gr.png'},
{name:'تختجمشید',region:'img/Level3/perspolis.jpg',flag:'https://flagcdn.com/72x54/ir.png'},{name:'کولوسئوم',region:'img/Level3/Colosseum.jpg',flag:'https://flagcdn.com/72x54/it.png'},
{name:'بایکال',region: 'img/Level3/baikl.jpg',flag:'https://flagcdn.com/72x54/ru.png'},{name:'سوپریور',region:'img/Level3/superyour.jpg',flag:'https://flagcdn.com/72x54/ca.png'},
{name:'نیوتون',region: 'img/Level3/Newton.jpg',flag:'https://flagcdn.com/72x54/gb.png'},{name:'گالیله',region: 'img/Level3/Galileo.jpg',flag:'https://flagcdn.com/72x54/it.png'},
{name:'کاخکرملین',region:'img/Level3/kremlin.jpg',flag:'https://flagcdn.com/72x54/ru.png'},{name:'کاخباکینگهام',region:'img/Level3/bakingham.jpg',flag:'https://flagcdn.com/72x54/gb.png'},
{name:'ابنسینا',region: 'img/Level3/ibn-Sina.png',flag:'https://flagcdn.com/72x54/ir.png'},{name:'انیشتین',region: 'img/Level3/einstein.jpg',flag:'https://flagcdn.com/72x54/de.png'}];

//** Declare Variable Section ***/
let selectedWords;
let letters = []
let wrongLetter = []
let level = 0
const gifts = ['بستتنی عروسکی','چایی با بیسکویت','ده دقیقه گفتگو با محمدحسن','نیم ساعت بازی با کامپیوتر','کتاب هدیه','دانلود فیلم با اینترنت خانه']

/*** Initial Setting ***/
audio.pause()
if (level === 0) prelude.classList.add('show')

audio.addEventListener('timeupdate', (e) => {
    let duration = e.srcElement.duration, currentTime = e.srcElement.currentTime

    if (duration === currentTime) audio.play()
})

/*** Get Random Word ***/
function selectWord() {   
    if (level <= 10) {
        selectedWords = country[Math.floor(Math.random() * country.length)]  
        nameGame.textContent = 'کشور'
    }
    else if (level > 10 && level <= 20) {
        selectedWords = city[Math.floor(Math.random() * city.length)]
        nameGame.textContent = 'شهر'
    }
    else {
        nameGame.textContent = ' '
        selectedWords = place[Math.floor(Math.random() * place.length)]  
    }

    imageEl.setAttribute('src', `${selectedWords.region}`)
    flag.setAttribute('src', `${selectedWords.flag}`)
}

function displayLetter() {
    levelEl.textContent = level;

    word.innerHTML = 
    `
    ${selectedWords.name.split('').map(letter =>
        `<div class="letter">${letters.includes(letter) ? letter : ''} </div>`)
        .join('')}
    `
     
    let wordText = word.innerText.replace(/\n/g, '') //قراردادن حروف صحیح در یک خط
    //** Win The Round */
    if (selectedWords.name === wordText) {
        finalMesseage.textContent = 'آفرین🌹 تو با موفقیت از این مرحله عبور کردی'
        popup.classList.add('show')

        level++      

        country = country.filter(el => el.name !== selectedWords.name)
        city = city.filter(el => el.name !== selectedWords.name)
        place = place.filter(el => el.name !== selectedWords.name)

        playBtn.addEventListener('click', () => {            
            resetGame()  
            if (level === 30) {
                vicMsg()
            }       
        })       
        window.addEventListener('keydown', e => {        
            if (e.keyCode === 13) {
                resetGame()
                if (level === 30) {
                    vicMsg()
                }
            }
        })
        //** Inside to Next Stage */
        if (level === 11) {
            prelude.classList.add('show')
            popup.classList.remove('show')
            resetGame() 
            pause()
        
            preludeMsg.textContent = `یک گام به نجات شاهزده نزدیک شدی.
            در تالار دوم با دقت بیشتری عمل کن. در این تالار باید نام شهری که پنهان شده است را پیدا کنی. به راهنمایی های بازی توجه کن.`
            startGame.textContent = `تالار بعدی`
        }
        if (level === 21) {
            prelude.classList.add('show')
            popup.classList.remove('show')
            resetGame()
            pause()

            preludeMsg.textContent = `باورکردنی نیست. تو عالی عمل کردی. در این تالار کلمه پنهان، هرچیزی میتواند باشد، پس تمرکز بیشتری داشته باش.
             ما مطمئنیم که تو میتوانی از این تالار هم عبور کنی`
            startGame.textContent = `تالار نهایی`
        }
    }        
}
/*** Reset Game ***/
function resetGame() {
    // Empty Arrays
    letters.splice(0);
    wrongLetter.splice(0);

    selectWord()  

    displayLetter()

    showWrong()

    popup.classList.remove('show')

    minute = 1
    second = 59   
}

function showNotif() {
    notification.classList.add('show')
    
    setTimeout(function() {
        notification.classList.remove('show')
    }, 2000)
}

function showWrong() {
    //*** Display Wrong Letter ***//
    wrongWord.innerHTML = 
    `
        ${wrongLetter.length > 0 ? `<h3>حروف اشتباه</h3>` : ''}
        ${wrongLetter.map(letter =>`<span>${letter}</span>`).join(' - ')}
    `
    //*** Display Figure Part ***//
    figure.forEach((part, index) => {
        if (wrongLetter.length > index) 
            part.style.display = 'block'
        else part.style.display = 'none'
    })
    //*** If User Lose Game ***//
    if (wrongLetter.length === figure.length) {
        loseGame()
    }        
}
/*** Lose Game ***/
function loseGame() {
    loseMsg()
    playBtn.textContent = 'شروع دوباره'
    
    locReload()
}
/*** Show Lose Message ***/
function loseMsg() {
    finalMesseage.innerHTML = `
        شاهزاده به دار آویخته شد🤦‍♂️ 
        <br>
        کلمه مورد نظر <span>${selectedWords.name}</span> بود
        `
    popup.classList.add('show')
}
/*** Reload Location ***/
function locReload() {
    playBtn.addEventListener('click', () => location.reload())

    window.addEventListener('keydown', e => {        
        if (e.keyCode === 13)
            location.reload()
    })
}
/*** Victory Message ***/
function vicMsg() {
    prelude.classList.add('show')
    popup.classList.remove('show')

    preludeMsg.innerHTML = `آفرین قهرمان💖 تو موفق شدی شاهزاده و کشور را نجات دهی
    تو لایق دریافت جایزه <span>${gifts[Math.floor(Math.random() * gifts.length)]}</span> هستی`
    
    startGame.textContent = 'ماجراجویی دوباره'  
}

/*** Event Section ***/
startGame.addEventListener('click', () => {
    if (level === 0) level++
    if (level === 30) location.reload()

    prelude.classList.remove('show')

    selectWord()

    displayLetter()

    audio.play()
    
    start()
})
/*** Keyword Press Event ***/
window.addEventListener('keydown', e => {
    if (e.keyCode >= 65 && e.keyCode <= 94 || e.keyCode >= 186 && e.keyCode <= 188 || e.keyCode >= 219 && e.keyCode <= 222) {
        let letter = e.key;
        if (selectedWords.name.includes(letter)) {
            if (!letters.includes(letter)) {
                letters.push(letter)
                displayLetter()
            } else showNotif()
        } else {
            if (!wrongLetter.includes(letter)) {
                wrongLetter.push(letter)
                showWrong()
            } else showNotif()
        }       
    }        
})
/*** Timer For Game ***/
let millisecond = 0, second = 59, minute = 1, corn;

function timer() {
    if ((millisecond += 10) === 1000) {
      millisecond = 0;
      second--;
    }

    if (second === 0) {
        second = 59;
        minute--;
        if (minute < 0) {
            minute = 0
            second = 0
            pause()
            loseGame()
        }
    }   
    
    minuteEl.textContent = `0${minute}`
    secondEl.textContent = `${second < 10 ? '0' + second : second}`
}
function start() {
    corn = setInterval(timer, 10)
}
function pause() {
    clearInterval(corn)
}