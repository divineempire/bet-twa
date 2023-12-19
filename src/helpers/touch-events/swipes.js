export function subscribeTouchEvents(node, instance) {
    domElement = node
    couponInstance = instance
    node.addEventListener('touchstart', touchStart)
    node.addEventListener('touchmove', touchMove)
    node.addEventListener('touchend', touchEnd)
    node.addEventListener('touchcancel', touchCancel)
}

export function unsubscribeTouchEvents(node) {
    node.removeEventListener('touchstart', touchStart)
    node.removeEventListener('touchmove', touchMove)
    node.removeEventListener('touchend', touchEnd)
    node.removeEventListener('touchcancel', touchCancel)
}
let domElement = null
let couponInstance = null
let touchStartData = {}
let touchEndData = {}
const moveSettings = {
    minDist: 150,
    maxDist: 400,
    maxTime: 1000,
    minTime: 50
}

function touchStart(event) {
    touchStartData.time = event.timeStamp
    touchStartData.x = event.changedTouches[0].screenX
    touchStartData.y = event.changedTouches[0].screenY
}
function touchMove(event) {
    let screenHeight = window.innerHeight
    if (touchStartData.y < event.changedTouches[0].screenY) {
        let transformValue = event.changedTouches[0].screenY - touchStartData.y
        domElement.style.transform = `translateY(${transformValue}px)`
    }
}
function touchEnd(event) {
    touchEndData.time = event.timeStamp
    touchEndData.x = event.changedTouches[0].screenX
    touchEndData.y = event.changedTouches[0].screenY
    compare()
}
function touchCancel(event) {
    console.log(event)
}

function compare() {
    let transformValue = Number(domElement.style.transform.replaceAll(/[\D]+/g, ''))
    // console.log(transformValue)
    if ((touchEndData.y - touchStartData.y) >= moveSettings.minDist &&
        (touchEndData.y - touchStartData.y) <= moveSettings.maxTime &&
        (touchEndData.time - touchStartData.time) >= moveSettings.minTime &&
        (touchEndData.time - touchStartData.time) <= moveSettings.maxTime) {
            couponInstance.closePopup()
            setTimeout(() => {
                domElement.style.transform = `translateY(0px)`
            }, 500)
    } else if (transformValue >= 150) {
        couponInstance.closePopup()
        setTimeout(() => {
            domElement.style.transform = `translateY(0px)`
        }, 500)
    } else {
        // domElement.style.transform = `translateY(0px)`
    }
}
