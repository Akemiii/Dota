function porctWin(winLose) {
    return ((winLose.win / (winLose.win + winLose.lose)) * 100).toFixed(2)

}
export default porctWin;