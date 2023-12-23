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
    minDist: 200,
    maxDist: 450,
    maxTime: 1000,
    minTime: 50
}

function touchStart(event) {
    // console.log(event)
    touchStartData.time = event.timeStamp
    touchStartData.x = event.changedTouches[0].pageX
    touchStartData.y = event.changedTouches[0].pageY
}
function touchMove(event) {
    // console.log(event)
    let screenHeight = window.innerHeight
    if (touchStartData.y < event.changedTouches[0].pageY && (screenHeight - touchStartData.y) > 350) {
        let transformValue = event.changedTouches[0].pageY - touchStartData.y
        domElement.style.transform = `translateY(${transformValue}px)`
    }
}
function touchEnd(event) {
    // console.log(event)
    touchEndData.time = event.timeStamp
    touchEndData.x = event.changedTouches[0].pageX
    touchEndData.y = event.changedTouches[0].pageY
    compare()
}
function touchCancel(event) {
    // console.log(event)
}

function compare() {
    let transformValue = Number(domElement.style.transform.replaceAll(/[^\d.]/g, '')).toFixed(0)
    let screenHeight = window.innerHeight
    if (
        (touchEndData.y - touchStartData.y) >= moveSettings.minDist &&
        (touchEndData.y - touchStartData.y) <= moveSettings.maxTime &&
        (touchEndData.time - touchStartData.time) >= moveSettings.minTime &&
        (touchEndData.time - touchStartData.time) <= moveSettings.maxTime &&
        (screenHeight - touchStartData.y) > 350) {
            couponInstance.closePopup()
            setTimeout(() => {
                domElement.style.transform = `translateY(0px)`
            }, 500)
    } else if (transformValue >= 200) {
        couponInstance.closePopup()
        setTimeout(() => {
            domElement.style.transform = `translateY(0px)`
        }, 500)
    } else {
        domElement.style.transform = `translateY(0px)`
    }
}
