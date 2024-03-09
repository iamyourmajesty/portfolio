import React, { useState } from 'react'
import './App.css'
import {Routes,Route, Outlet, useActionData} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Resume from './Pages/Resume'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar'
import Lottie from  "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";


const App = () => {
  return (
    <div>
   <header className=' sticky top-0'> <Navbar/></header>
    
    <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, totam illum qui amet molestias, velit dolores ea inventore minus doloribus et iusto ipsam magnam deleniti quo recusandae. Fugiat dignissimos facere nulla. Voluptas laudantium deserunt voluptates obcaecati, quasi, vitae reiciendis, deleniti porro ratione sed autem dolorum hic amet sapiente. Dolor molestiae voluptatem, blanditiis labore eius quos, doloremque ab aspernatur natus quisquam, recusandae quia sunt consectetur sed quas ducimus aut facilis ipsa accusantium doloribus illum reprehenderit delectus? Cum, nobis explicabo corporis quae natus voluptate provident dolorum. Ex facere voluptatum deleniti porro autem beatae repellendus similique dolores assumenda corporis, in cum repellat ut magni voluptatem incidunt dolor et odio perspiciatis tempore eligendi quo itaque! Atque velit voluptatum illo nobis et adipisci, eveniet sunt tempore dignissimos nesciunt saepe, numquam officia ullam error tempora repellat officiis suscipit sed modi distinctio perspiciatis maiores blanditiis. Optio asperiores quisquam dignissimos ipsum quos sequi! Quam beatae exercitationem quisquam vitae rerum soluta. Molestias hic quam facilis. Ducimus veritatis eveniet ad sint neque ratione maiores! Doloribus vitae amet facilis sequi, provident ipsum, obcaecati accusantium voluptate recusandae, laboriosam similique omnis atque consectetur. Molestiae possimus amet mollitia, ipsa officiis, nulla sed sequi quaerat voluptas laboriosam corporis. Molestiae in obcaecati, dolore sit excepturi, deleniti sequi harum alias, ipsum tenetur dolores voluptas vel porro aut modi corporis fugiat perspiciatis recusandae. Culpa commodi accusantium error quam sequi delectus, animi doloremque laudantium earum deserunt, voluptate perferendis natus architecto atque consequuntur? Ab quia quibusdam magni rem voluptatibus autem maxime aspernatur doloribus neque reprehenderit quas accusamus eaque harum, hic vitae necessitatibus recusandae non ut nemo deserunt id omnis numquam. Dicta earum, aperiam voluptatum sapiente fugiat quasi reiciendis inventore porro veritatis, assumenda facilis sunt optio doloribus minus, sed qui totam corporis recusandae dolorum eius quibusdam adipisci eveniet! Aliquam excepturi praesentium repudiandae, recusandae, dignissimos rerum ducimus sapiente consequatur quasi aut soluta fuga aperiam id mollitia blanditiis tenetur. Temporibus mollitia inventore ullam, modi ea laborum id necessitatibus omnis magni culpa eaque, consequuntur, quia corporis ab veritatis nisi repellendus sapiente similique dignissimos. Veritatis repellendus natus, hic maiores in accusamus reiciendis repellat ullam. Consequatur id quae earum, a tempora nemo temporibus sunt nesciunt perferendis quisquam aperiam ab, pariatur vitae eligendi cum dicta tempore dolor in! Unde cum hic eligendi in suscipit molestiae. Fuga recusandae praesentium, velit quas voluptates veritatis neque tempora consequuntur eaque illo minima blanditiis labore minus inventore dolorem ut, similique nobis illum magnam. Assumenda provident natus a modi in adipisci, ipsa non? Optio sint laudantium sapiente tenetur assumenda sit expedita consequuntur cum, veritatis pariatur dolor consectetur accusantium laboriosam nemo provident eos quos. Tenetur ipsum eveniet ea possimus corporis, magnam odit natus soluta repellat dicta necessitatibus iusto consequuntur fuga perferendis ipsa porro corrupti at id debitis. At possimus, magnam nostrum tenetur omnis quo. Reiciendis beatae ex aspernatur! Vitae cumque mollitia laboriosam vero eligendi dolores sed vel delectus ex omnis maxime id ratione corporis culpa quisquam perferendis, eius veritatis fuga atque odio similique enim! Voluptates totam vitae neque eveniet veritatis dicta illum odit vel asperiores laboriosam, eum voluptatibus voluptate nam odio amet modi debitis aspernatur nostrum excepturi dolores sint blanditiis sed officia? Non, dolore iste repudiandae eum consectetur porro. Quae totam veniam vitae esse omnis laborum illo porro at dolorum magni eius labore sit voluptas, dolore harum quasi eveniet cum voluptates enim consectetur accusantium dolorem neque ullam! Voluptate porro pariatur consequatur amet beatae odit veritatis, illum sapiente repellat nulla quibusdam saepe cumque officiis fuga quidem, voluptas architecto. Vitae mollitia in repellendus repudiandae, soluta obcaecati corporis corrupti veniam suscipit. Voluptatum libero accusamus totam nulla quod praesentium quo ipsam veniam dicta alias recusandae vero facere voluptatibus quisquam voluptates, ad culpa consequatur dolorem! Quia non incidunt culpa accusantium nulla ratione quam sint minus ea praesentium, natus minima nostrum soluta asperiores vitae, error, pariatur voluptatum! Quia, et. Repellat repellendus quia quo quam perspiciatis beatae officia magni! Quasi ratione esse recusandae labore nemo iusto? Facere eligendi quaerat ex nesciunt ratione at obcaecati beatae illo, cum inventore natus totam sapiente necessitatibus, quo consectetur libero veritatis neque a iste voluptatum. Error ullam ipsum officiis repellendus accusamus similique amet consequatur harum adipisci obcaecati. Eveniet dolor incidunt explicabo quos consequuntur tempora, expedita nesciunt et quaerat. Recusandae quaerat aliquid beatae enim, minima ab repellendus saepe quasi eaque, aliquam quos consectetur tenetur magnam sed reiciendis, atque delectus obcaecati laudantium illo. Molestiae fuga officiis atque corporis, reprehenderit temporibus dignissimos natus delectus? Minima doloremque magni modi, quasi atque aut suscipit quaerat. Eos repudiandae blanditiis ut magni veniam at ducimus hic. Suscipit aperiam dicta officiis, illum nihil numquam id et debitis optio vero eligendi quidem voluptate facere veniam! Accusantium pariatur reprehenderit nesciunt sequi assumenda temporibus dolorem cum voluptate minima, doloremque amet asperiores incidunt iusto obcaecati omnis hic rem ratione sapiente nisi, vero, veniam expedita autem. Officiis facere dicta, nisi aut in cumque animi quisquam reiciendis, necessitatibus inventore veritatis voluptatibus nulla aspernatur corrupti omnis accusantium molestias rerum obcaecati. Velit debitis excepturi, atque esse labore corporis. Perspiciatis placeat quod unde ad eius eos sapiente quasi alias quis laborum, veniam obcaecati rerum suscipit voluptatibus vero reprehenderit ea. Voluptatum unde officiis architecto. Eaque accusantium rerum repellendus libero mollitia illo. Cupiditate fuga, facere totam, sed quod sunt adipisci alias id voluptas expedita officiis eius. Libero, corporis iste aliquam asperiores officia tempore veniam debitis non molestias consequuntur est quo delectus maxime nobis aliquid porro esse at provident earum doloribus suscipit odio optio qui. Cum, in rerum. Soluta quos aut dolorem cupiditate magnam, eum corrupti quisquam accusamus a similique atque laborum ut obcaecati omnis rerum, excepturi alias ipsam! Quo nam nobis asperiores hic qui harum fugit quisquam quia eaque, porro repellat, dolorum vel? Perspiciatis deserunt, culpa corrupti delectus recusandae voluptate facere officiis consequatur veniam ut qui reprehenderit suscipit, voluptatibus eius, similique soluta? Quisquam amet sint ex animi dicta quidem iste vitae fugit nemo ratione illum, ipsam, eius ea iusto rem reiciendis saepe, ab beatae. Fuga nemo voluptas veritatis tempore itaque, laboriosam repellendus? Doloremque, autem. Qui nulla, quae minus ullam officiis similique! Sint deserunt aliquam perferendis voluptatum autem porro quod, ab sed. Ad harum impedit, consequuntur numquam, inventore perferendis, asperiores est maiores culpa corporis commodi eligendi id ducimus!
    </div>

    <Lottie className="bg" animationData={nightsky} loop={true} />  
      <Lottie className="bgtwo" animationData={nightsky} loop={true} />   
      <Lottie className="bgtemp" animationData={nightsky} loop={true} /> 
    <Routes>
    <Route path='/' element={<div> <Outlet/> </div>}>
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Project' element={<Project/>}/>
    <Route path='/resume' element={<Resume/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Route>
    </Routes>
    </div>
    
  )
}

export default App