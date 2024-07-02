function timedCount() {
    setInterval(() => {
        postMessage(true);
    }, 1000)
}

timedCount();