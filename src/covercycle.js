// viceCoverImages = [
//     "images/vice/cover/vice-cover-1.png",
//     "images/vice/cover/vice-cover-2.png",
//     "images/vice/cover/vice-cover-3.png"
//     ]

// let vcbCoverImages = [
//     "images/vcb/cover/vcb-cover-1.png",
//     "images/vcb/cover/vcb-cover-2.png",
//     "images/vcb/cover/vcb-cover-3.png",
//     "images/vcb/cover/vcb-cover-4.png",
//     "images/vcb/cover/vcb-cover-5.png",
//     "images/vcb/cover/vcb-cover-6.png",
//     "images/vcb/cover/vcb-cover-7.png",
//     "images/vcb/cover/vcb-cover-8.png",
//     "images/vcb/cover/vcb-cover-9.png"
//     ]

// function coverCycleWrapper(_imageSet, imgElement) {
//     let imageSet = _imageSet
//     let imageIndex = 0;
    
//     function coverCycle() {
//         imageIndex++;
//         if (imageIndex == imageSet.length) {
//             imageIndex = 0;
//         }
//         document.getElementById(imgElement).src = imageSet[imageIndex];
    
//         setTimeout(coverCycle, 1 * 1000)
//     }

//     coverCycle();
// }


// window.onload = coverCycleWrapper(viceCoverImages, "project-cover--vice__image");
// window.onload = coverCycleWrapper(vcbCoverImages, "project-cover--vcb__image");
console.log(document.getElementById("project-cover--vcb__image"))