import React, { useState } from 'react'
import { useParallax } from 'react-scroll-parallax'

function Lorem() {
    // console.log(currentScroll)
    const parallax = useParallax({
        // rotate: [360, 0],
        translateY: [0, 650],
        translateX: [0, 900,'easeInSine'],
        scale: [0.5,3,'easeInOutBack'],
        speed: 10,
        opacity: [1,0],
        targetElement: document.getElementById("abcd"),
        shouldAlwaysCompleteAnimation: true,
    })
    const parallax2 = useParallax({
        rotate: [0, 360],
        translateY: [0, 680],
        translateX: [0, -1289],
        scale: [1,1.5],
        speed: -10,
        opacity: [0,1],
        targetElement: document.getElementById("efgh"),
        shouldAlwaysCompleteAnimation: true,
        // endScroll: [50]
    })

    const parallax3 = useParallax({
        translateY: [-50,52],
        scaleY: [0,2]
    })


    return (
        <>
        <div id="a1b2" className=' pb-20 '>

            <div id='abcd'  className=' pt-40 pl-6 pr-6 -z-10 relative overflow-y-visible'>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat lorem ut eros ultrices accumsan. Nam iaculis enim tortor, a malesuada felis faucibus ac. Maecenas odio velit, iaculis sit amet condimentum ornare, fermentum sed purus. Vestibulum faucibus, nisl sollicitudin dapibus hendrerit, quam erat fermentum sapien, a fermentum velit ex id mi. Proin ornare orci velit, in hendrerit mi efficitur vitae. Etiam et dictum orci, vitae convallis massa. Quisque ac consequat nibh. Cras velit erat, pretium sit amet nibh vitae, dignissim aliquam arcu. Sed quis hendrerit urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut dapibus egestas ante, at dapibus felis. Duis rhoncus suscipit mi, quis porttitor diam. Donec a enim nec tellus tempus mollis. Morbi mauris nisi, pellentesque a quam eu, fringilla venenatis enim. Donec laoreet vel ante vitae condimentum. Donec rutrum pretium purus et molestie.

                Aenean porta libero sed sem laoreet gravida. Praesent nec nisl dui. Mauris hendrerit nec neque luctus fermentum. Phasellus ut enim in magna mattis aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ut tincidunt orci, vitae aliquam lacus.

                Curabitur vitae mauris ante. Pellentesque tincidunt est ac lectus imperdiet sagittis. Ut vitae velit sagittis, commodo odio sed, tristique urna. Sed efficitur mi at sem scelerisque, id interdum tellus volutpat. Donec placerat, elit eu cursus venenatis, nisl metus ornare justo, a ultrices libero sapien sit amet eros. Nullam id arcu sed diam facilisis interdum a eget diam. Nunc maximus, nunc sit amet vulputate molestie, ipsum est finibus velit, quis tempor nisl quam nec dolor. Quisque in posuere orci. Suspendisse gravida odio sit amet ornare bibendum. Nullam malesuada rhoncus mauris et interdum. Aliquam in leo convallis, euismod urna id, eleifend quam. Vivamus vel euismod ex, id facilisis ligula. Sed sodales vel dui id tempus.

                Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae volutpat ipsum. Sed lobortis porta egestas. Phasellus varius suscipit nisi, quis ultrices urna mollis sodales. Duis gravida tortor posuere, semper sem in, placerat erat. Donec vel felis at nisi varius efficitur.

                Cras commodo ex sed lorem mattis sollicitudin vitae ut nunc. Aenean quis risus tellus. Ut ac nisi ut lacus consectetur tincidunt et vitae diam. Nulla ut euismod risus, vitae interdum ex. Cras consequat finibus elit id placerat. Aenean blandit rhoncus aliquam. Donec id nisl orci. Cras laoreet magna nisi, non malesuada nisi cursus dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque lobortis mi a finibus mollis. Nullam et efficitur lacus.

                Vivamus fringilla risus eget placerat aliquam. Aliquam eget tortor neque. Nulla auctor justo et massa semper, in cursus diam pharetra. Donec pharetra sapien eu risus faucibus gravida. Cras ac lacus id massa sagittis ultrices. Cras elit tellus, commodo a lacus ut, ornare lacinia odio. Cras mauris odio, interdum id egestas ac, lacinia ac quam. Morbi quis diam facilisis, vehicula turpis et, porta dolor. Aliquam vel imperdiet massa.

                Proin dictum viverra vehicula. In in nibh sed nunc tempor lobortis. Nulla ante urna, tincidunt ac convallis ultricies, luctus vel sapien. Pellentesque id tempus massa. Proin lobortis massa eget imperdiet imperdiet. Quisque sed ante sem. Cras dapibus erat nec leo maximus condimentum. Suspendisse vulputate metus bibendum, luctus dolor vitae, sollicitudin nunc. Nulla vulputate, lectus sit amet gravida sagittis, libero sem tincidunt leo, nec egestas ex sapien sed est. Proin dapibus elit vel tortor interdum, vitae dapibus lorem elementum. Nunc quis eros nec sapien dignissim blandit.

                Quisque libero lectus, posuere sed nunc at, faucibus mollis eros. Sed dui enim, suscipit non urna id, volutpat euismod nisl. Donec ultrices metus eu fermentum fermentum. Vestibulum porta ac orci a eleifend. Praesent posuere, dolor non ullamcorper mollis, turpis magna condimentum ante, at blandit lorem risus nec quam. Maecenas pellentesque enim mauris, vulputate tristique odio congue quis. Quisque maximus lacus sed varius viverra. Praesent sed nisi sed massa tincidunt aliquam. Etiam eu dapibus felis, a efficitur mi. Integer dui leo, porttitor nec nunc id, accumsan varius est. Pellentesque vitae arcu nec felis auctor luctus a eu tortor. Donec turpis tortor, dignissim nec faucibus ut, egestas at erat. Vivamus vulputate fermentum rutrum.

                Etiam at magna feugiat, dictum quam in, ultricies justo. Nulla tincidunt luctus posuere. Aenean ut volutpat nisl. Ut volutpat tortor ligula, vel pretium dolor dignissim nec. Quisque faucibus felis vel ligula porta, non dignissim lacus consequat. Quisque congue aliquam accumsan. Integer fermentum metus id massa tristique, non ultricies mi venenatis. Suspendisse potenti. Fusce at risus lacinia, semper augue nec, viverra ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque aliquam vel orci eget aliquam. Quisque ante turpis, convallis sit amet ultrices vel, molestie vel justo. Aenean eleifend semper cursus.

                Aliquam rutrum mi blandit, aliquam dolor at, facilisis ipsum. Phasellus faucibus feugiat dapibus. Phasellus mollis, sem in sagittis lacinia, est eros lobortis tellus, sit amet volutpat elit ligula sed leo. Nullam aliquet massa in risus accumsan posuere. Mauris ultricies posuere felis vel pretium. Nullam feugiat feugiat pulvinar. Sed mattis tortor vitae diam finibus, sed mattis urna rutrum. Praesent congue massa ut rhoncus vehicula. Proin molestie eu turpis commodo posuere. Nulla aliquam ultrices diam, sit amet luctus augue facilisis quis. Vivamus pellentesque, purus eu faucibus sollicitudin, lacus ligula venenatis dui, a posuere tortor nulla ut justo. Phasellus sit amet tincidunt felis, ut volutpat mauris. Nunc pulvinar sed tortor a ultrices.

                Aenean mollis enim nec lobortis interdum. Integer elit diam, feugiat et orci ac, porttitor blandit dui. Ut sollicitudin porttitor justo quis ornare. Sed posuere, odio nec pellentesque tristique, orci felis varius urna, quis posuere ligula purus vel velit. Sed efficitur porttitor erat, vel lacinia sapien vestibulum pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque scelerisque, nulla in finibus condimentum, risus nulla rhoncus sem, eget faucibus libero enim sed ipsum. Maecenas posuere dictum urna, quis venenatis magna pharetra nec. Nulla convallis massa quis ligula molestie congue. Sed et urna iaculis, aliquam enim quis, fermentum nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque gravida vestibulum est, quis egestas mi commodo non. Curabitur egestas, ex a suscipit lobortis, ligula nibh luctus urna, id pharetra lorem libero vel elit. Pellentesque eget euismod dui, sed commodo diam.

                Ut elit magna, iaculis sed leo quis, interdum ultricies ex. Duis arcu odio, pharetra at rhoncus vel, rhoncus vitae nisi. Vivamus volutpat sagittis maximus. Vestibulum nec nisl gravida, dictum dolor non, sagittis ante. In hac habitasse platea dictumst. Sed in neque urna. Suspendisse finibus pulvinar laoreet. Etiam est lorem, accumsan eu lorem vestibulum, interdum rutrum velit. Nullam velit ex, bibendum eget molestie vel, pellentesque lobortis neque. Etiam non magna ac urna fringilla ornare. Aliquam maximus aliquet nisi, sed feugiat augue fringilla et. Curabitur porta vulputate diam, id semper nulla consectetur ac. Donec molestie risus sit amet elit efficitur, malesuada dapibus metus facilisis.

                Duis quis odio et felis euismod aliquet. Sed vel sodales urna. Nam vel bibendum dui. Aenean sit amet vestibulum dui, ultrices ultrices dui. Proin tincidunt congue sodales. Fusce cursus massa turpis, vel volutpat leo congue id. Phasellus magna dolor, maximus at metus id, placerat ornare nisi. Phasellus justo erat, condimentum at mattis eget, sagittis in sem. Sed sit amet velit viverra nulla pellentesque varius. In dignissim risus non tristique vulputate. In vulputate a quam ac volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

                Phasellus elit leo, pulvinar vel arcu ac, euismod laoreet ipsum. Nullam tristique augue sed nisl molestie, vitae cursus eros mollis. Mauris viverra ullamcorper tellus lacinia vehicula. Donec maximus magna non sodales mattis. Pellentesque accumsan metus varius ullamcorper porta. Suspendisse efficitur faucibus tincidunt. Ut consectetur massa eget erat sollicitudin mollis. Nullam quis nibh leo. Duis sed malesuada velit. Ut euismod dapibus magna, in scelerisque nibh tempus vulputate. Suspendisse non fermentum diam.

                Nulla quis varius nisi, nec mattis leo. Nam tortor nulla, suscipit vel euismod sit amet, luctus non erat. Nam sit amet diam quis urna vulputate porta at in ante. Sed aliquam ex nunc, et porta elit convallis in. Praesent eleifend velit vitae scelerisque maximus. Fusce commodo dignissim massa. Sed blandit urna sit amet leo finibus, non semper massa malesuada. Praesent varius eu dui eget venenatis. Nulla consectetur arcu commodo neque ultricies, id egestas nulla gravida. Ut nibh elit, aliquet sit amet interdum sit amet, tincidunt sit amet arcu. Donec pretium placerat nibh, sed bibendum erat scelerisque varius.

                Etiam sapien sem, hendrerit eu massa sit amet, laoreet semper nisi. Nullam vulputate elementum aliquam. Mauris ut orci eros. Suspendisse eleifend dui sed leo bibendum, maximus sollicitudin magna tristique. Donec ac porta diam. Nullam a sem vitae nunc sodales hendrerit. Nullam augue lorem, faucibus a nulla interdum, porta ullamcorper velit. Ut faucibus erat eu porttitor sodales. Quisque sollicitudin felis id varius aliquam. Integer vel sapien fermentum lacus vulputate vehicula malesuada eget urna. Quisque rutrum, ligula non aliquam laoreet, orci sem sodales neque, eu efficitur erat neque id quam. Nunc ac lorem dui. Cras at finibus erat. Pellentesque eget elit pharetra, finibus nisi id, tempus mi.

                Aliquam erat volutpat. Suspendisse finibus lectus neque, a ullamcorper nisl venenatis vitae. Nam porttitor est eget leo elementum pharetra. Nullam at arcu eu diam accumsan vehicula quis a enim. Phasellus metus sapien, porta eu leo a, suscipit sollicitudin tellus. Vestibulum luctus massa sem, id tincidunt est fermentum sit amet. Vivamus pharetra porttitor urna. Integer sed nibh diam.

                Donec interdum turpis a ante viverra dictum. Vestibulum a nunc consequat, porta libero ac, commodo mauris. Vivamus dictum lacus at eleifend mattis. Nullam in malesuada justo. Cras maximus enim ut nulla hendrerit, id sodales odio vulputate. Morbi ultrices vel eros viverra ultrices. Pellentesque enim nunc, feugiat vitae quam at, maximus dapibus sem. Nullam aliquam arcu id arcu laoreet rhoncus. Suspendisse maximus, arcu a cursus fringilla, orci urna semper dui, ut congue quam risus ac nisi. Duis id vestibulum nulla, ut pretium odio. Nunc porttitor vitae tortor vitae posuere.

                Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque diam ex, lacinia et posuere id, iaculis quis mauris. Nullam facilisis facilisis nisi, sit amet rutrum est varius sed. Integer pharetra magna sit amet posuere condimentum. Nam efficitur congue mauris at ultrices. Morbi ut auctor orci. Duis nulla tortor, interdum vel mauris sed, dapibus ullamcorper diam. Suspendisse quis mi et quam auctor pulvinar eget sit amet metus. Morbi a tellus ultrices, pretium risus ultrices, iaculis dui. Duis ipsum turpis, tincidunt nec imperdiet sed, dignissim sed tellus. Vivamus gravida blandit felis. Maecenas ultrices vehicula nisl ac efficitur. Donec sed dolor arcu. Sed et metus ut arcu dignissim commodo non in erat. Curabitur tempus interdum ornare.

                Etiam est nisi, pellentesque ac neque ac, accumsan mollis mauris. Pellentesque lobortis ligula id eleifend pellentesque. Aenean eleifend sed justo ut tincidunt. Quisque sed enim quis mi tempor dapibus. Aliquam nulla nisi, consectetur vestibulum tellus vel, volutpat euismod enim. Etiam tristique euismod nibh, a commodo velit euismod id. Aenean non mollis tortor. Sed ac leo et dolor faucibus rutrum ultricies auctor magna. Aenean non faucibus tortor. Morbi pellentesque, turpis non laoreet sodales, enim enim blandit ex, at pellentesque tortor enim ut lorem. Ut porta tellus nec venenatis mollis. Cras id velit ac mauris pretium sollicitudin. Sed pellentesque nunc eget ante varius faucibus. Aenean ut ullamcorper nibh. Aenean dictum feugiat suscipit. Donec fermentum laoreet nunc, quis posuere felis vehicula in.

                Aenean laoreet sit amet magna nec auctor. Aenean ac ex elementum, lacinia leo at, lobortis lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut eget massa et libero dignissim pretium a eu libero. Aenean sed gravida ex, vitae ullamcorper mauris. Nulla aliquam, lacus in condimentum imperdiet, arcu mi malesuada ipsum, scelerisque gravida elit dui nec dolor. Praesent vulputate, nisi ut imperdiet euismod, quam massa aliquam erat, nec hendrerit sapien eros at justo. In quam turpis, rhoncus at tincidunt et, porta sed libero. Vivamus vitae maximus ipsum, eget auctor urna. Donec non risus leo.

                Nulla ac fermentum dui. Vestibulum ac justo augue. Aliquam sit amet odio in libero pulvinar varius id eget lorem. Mauris commodo, lacus eget egestas malesuada, mi nisi bibendum velit, eget sodales orci lorem sit amet orci. Etiam dui neque, sollicitudin dapibus facilisis ac, accumsan eu lacus. In vestibulum mauris pulvinar neque consectetur, id hendrerit dolor feugiat. Morbi bibendum nulla a nibh commodo, a posuere lacus imperdiet. Quisque commodo eros non fringilla lobortis. Quisque eget ipsum enim. Nunc faucibus enim ut justo ultrices aliquam. Donec lobortis suscipit suscipit. Proin lacinia ante non libero semper, dapibus fermentum massa maximus. Aliquam lorem erat, tincidunt a dignissim eu, consequat et felis. Fusce sit amet risus tincidunt, ultricies enim in, dictum enim.

                Vestibulum convallis tortor ac est efficitur mattis. Aenean sodales lectus eget ex dictum aliquet. Donec luctus, dolor vel interdum tempor, ipsum lorem tincidunt justo, et ultricies nisl dui non libero. Quisque sapien orci, bibendum id tortor ut, tempor congue ligula. Donec pellentesque tincidunt sapien vitae molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam tempor, dolor id laoreet semper, metus nunc aliquam turpis, sit amet semper lectus dui eu augue. Aliquam at volutpat nibh, vitae fringilla sapien. Morbi mauris leo, tincidunt sit amet urna vitae, efficitur auctor leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla laoreet tincidunt congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas blandit enim eget nibh dignissim consectetur. Sed dui libero, malesuada at facilisis ut, tincidunt quis dui. Morbi auctor molestie neque ut facilisis.

                Nunc eleifend mauris non nisi tempus efficitur. Suspendisse potenti. Nulla facilisi. Donec porta, lorem at imperdiet ullamcorper, lacus lacus pretium urna, ut placerat lacus mauris aliquet dui. Proin aliquet volutpat ante et malesuada. Praesent suscipit, metus sed porttitor tristique, velit nulla bibendum ipsum, non pulvinar nulla augue ac ipsum. Curabitur elementum consequat dictum. Donec blandit lacus sed nisl porttitor pretium. Donec massa eros, commodo id tellus fringilla, imperdiet placerat nisi. Cras dapibus elit vel augue consectetur, quis vulputate sapien dignissim. Cras placerat, enim nec rhoncus bibendum, urna lacus congue augue, eu gravida orci tellus non erat. Morbi nulla turpis, porttitor id risus id, tincidunt malesuada tortor. Phasellus viverra blandit mi, eu lacinia dui vehicula quis. Nam ut auctor lectus. Nullam vehicula ac magna non condimentum.

                Praesent blandit pulvinar erat, vitae luctus sapien consectetur tempus. Vestibulum at diam euismod, iaculis lacus quis, sagittis sem. Aenean nec arcu hendrerit, auctor sapien id, hendrerit velit. Proin in metus non est suscipit pharetra nec in massa. Vivamus nisi turpis, varius vel erat quis, tempor scelerisque leo. Curabitur egestas vestibulum ante, ac finibus massa auctor ullamcorper. Phasellus a odio pretium ipsum consequat congue. Pellentesque commodo orci tellus, at eleifend enim lacinia ac. Nam sit amet vehicula arcu.

                Fusce vestibulum, ligula ac tincidunt porta, nunc libero semper erat, ac rhoncus justo enim eu ligula. Vivamus congue tortor justo, sed scelerisque est convallis in. Etiam luctus, diam id fringilla luctus, leo mauris scelerisque lacus, in porttitor sem mauris nec erat. Mauris sed sagittis ligula. Nulla facilisi. Duis faucibus massa vel diam rutrum, id hendrerit risus iaculis. Nam vitae risus sed sem aliquet tempus in vel erat. Nam ac neque mollis, vestibulum diam non, tempor purus. Nullam a volutpat odio, ac scelerisque nibh. Vivamus ligula purus, vulputate quis ante et, ultricies porttitor odio. Proin vitae facilisis tellus. Vivamus varius faucibus turpis at fringilla.

                Aenean et justo ex. Maecenas turpis nibh, ultrices in tellus vel, volutpat dignissim mi. Aliquam eu nisi nulla. Cras id elit tristique, pharetra dolor id, sodales sapien. Morbi ut mauris a ex vehicula cursus et vel nulla. Donec tempus tincidunt mauris, vitae commodo sapien lobortis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean a neque leo. Donec quis sagittis tellus. Proin dictum sagittis augue, id lobortis lorem sollicitudin lacinia. Proin tincidunt quis enim at finibus. Aenean pharetra vitae sapien nec faucibus. Vestibulum libero justo, consequat ut vestibulum vitae, hendrerit non metus. Ut velit magna, eleifend lobortis dolor a, sagittis mattis ex. Nullam eget pellentesque nulla, vel egestas odio.

                Phasellus eget lobortis lorem, ac tincidunt diam. Sed id maximus dolor. Donec congue quam sit amet risus ultrices, quis auctor quam pretium. Morbi eu leo vitae nunc convallis faucibus. Sed hendrerit blandit interdum. In facilisis consequat est, elementum bibendum massa tempus vitae. Sed aliquet dignissim dui quis elementum. Praesent sed quam ac est efficitur elementum tincidunt at arcu. Morbi viverra, eros et molestie lacinia, odio odio ultrices justo, eget tempus tellus turpis nec lacus. Suspendisse ac turpis sit amet ipsum vulputate facilisis vitae quis erat.

                Ut massa tortor, tempor quis risus a, eleifend bibendum dui. Etiam ut nibh congue, mollis arcu quis, dictum nibh. Etiam consequat eleifend magna, in viverra diam tempus vel. Nullam sit amet arcu diam. Vestibulum consequat, felis sit amet sodales pharetra, libero leo congue turpis, in venenatis arcu erat sit amet ipsum. Aliquam imperdiet accumsan maximus. Phasellus consequat lorem eu nisl pellentesque, vel tristique metus rhoncus. Phasellus diam lacus, ultrices non sollicitudin eget, tristique et ligula. Maecenas efficitur rutrum mattis. Nulla elit turpis, mattis quis mollis at, vehicula non libero. Vivamus pulvinar iaculis tempus. Mauris at dui tempor neque pulvinar dignissim nec fermentum risus. Nulla facilisis ac justo eget pretium. Aliquam libero augue, commodo maximus ante in, luctus suscipit risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam faucibus, turpis et rutrum lobortis, mi diam volutpat arcu, at maximus felis massa sed urna.

                Sed quis dignissim sem. Aliquam commodo magna orci, sollicitudin cursus tortor lacinia eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas blandit enim lorem, commodo dapibus mauris porttitor eget. Phasellus erat enim, elementum in velit eu, mattis ullamcorper nunc. Aliquam porttitor velit et lorem porta aliquam. Sed et dictum magna. Sed tincidunt laoreet turpis, sed scelerisque est lobortis et. Nunc varius eros et volutpat venenatis. Fusce in diam quam. Nullam sodales dolor justo, sed gravida lacus convallis sed. Vestibulum pharetra nibh neque, eget rhoncus diam aliquam sed. Suspendisse ut facilisis nunc. Sed porttitor nisl orci, in ultrices mauris consequat sed. Phasellus fringilla dapibus ante et lacinia.

            </div>
            <div id='efgh' className=' justify-center mx-auto h-32 w-32 rounded-full border-black border-solid border-2 bg-white relative -z-10'></div>
            <div ref={parallax.ref} className="circle bg-blue-500 left-20"></div>
            <div ref={parallax2.ref} className="circle bg-red-500 right-20"></div>
        </div>
        <div className="grid">
        <div ref={parallax3.ref} className=' col-start-1 row-start-1 justify-center mx-auto w-full bg-slate-950 min-h-80 relative text-center flex flex-col'>
            <p className='text-white text-3xl uppercase '>This is my footer</p>
        </div>
        
        </div>
        <div className='justify-center mx-auto w-full h-40 bg-white'>

        </div>
        </>
    )
}

export default Lorem