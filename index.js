function superbowlWin(record) {
    let win = record.find((ele) => ele.result === "W" )
    return win ? win.year:undefined;
}
