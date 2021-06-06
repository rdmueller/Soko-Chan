namespace game {
    /**
     * Determines if a number of moves/pushes is a record.
     */
    //% group="Gameplay"
    //% weight=88 help=game/isSokobanRecord
    //% blockId=gameissokobanrecord block="isSokobanRecord %levelset %level %moves %pushes"
    export function isSokobanRecord(levelset: number, level: number, moves: number, pushes: number): string {

        let record:number[];

        // Tutorial
        if (levelset == 0) {
            record = [
                [5,3],
                [10,7],
                [35,16],
                [41,14],
                [13,2],
                [17,8],
                [29,10],
                [22,9],
                [28,7],
                [37,16],
            ][level];

        // Microban
        } else if (levelset == 1) {
            record = [
                [33,8],        //  1
                [16,3],
                [41,13],
                [23,7],
                [25,8],
                [107,29],
                [26,6],
                [97,32],
                [30,10],
                [89,21],       // 10
                [78,16],
                [49,11],
                [52,33,54,21],
                [51,10],
                [37,14,43,12],
                [100,39],
                [25,9],
                [71,13],
                [41,20],
                [50,16],        // 20
                [17,5],
                [47,15],
                [56,10],
                [35,9],
                [29,7],
                [41,10],
                [50,10],
                [33,9],
                [104,22],
                [21,5],        // 30
                [17,6],
                [35,9],
                [41,10],
                [30,10,36,8],
                [77,31],
                [156,59],
                [71,23],
                [37,8],
                [85,27],
                [20,7],        // 40
                [50,15,56,13],
                [47,17,59,15],
                [61,22],
                [1,1],
                [45,11],
                [47,8],
                [83,22],
                [64,14],
                [82,21],
                [76,23,80,17], // 50
                [34,8],
                [26,8],
            ][level];

        // Blocksnco
        } else if (levelset == 2) {
            record = [
                [7,4],
                [20,8],
                [18,9],
                [51,15],
                [40,15],
                [40,16],
                [45,19],
                [53,21],
                [55,27],
                [83,35],    // 10
                [43,18],
                [60,18],
                [59,20],
                [77,21],
                [91,25],
                [66,25],
                [80,27],
                [93,29],
                [90,31],
                [67,32],    // 20
            ][level];

        // Microcosm
        } else if (levelset == 3) {
            record = [
                [49,13],
                [211,82],
                [123,29],
                [107,32],
                [116,30],
                [65,21],
                [110,23],
                [89,26],
                [209,64],
                [117,28,127,24],    // 10
                [125,30,149,28],
                [67,21],
                [128,22,146,20],
                [164,46],
                [139,51],
                [119,46,123,44],
                [188,56],
                [147,42],
                [124,29],
                [146,42],            // 20
                [185,28],
                [170,57,188,55],
                [19,17],
                [165,31],
                [130,40,146,38],
                [176,53],
                [234,45,250,43],
                [73,23],
                [83,24],
                [161,40],            // 30
                [101,18],
                [82,20],
                [173,41,201,37],
                [100,29],
                [70,25],
                [98,28],
                [184,51,194,49],
                [188,46],
                [151,24],
                [150,30,156,28],    // 40
            ][level];

        // Cantrip
        } else if (levelset == 4) {
            record = [
                [128,42,130,40],
                [180,64,186,60],
                [241,63],
                [232,55,234,53],
                [141,37],
                [133,42],
                [161,39],
                [208,53,248,45],
                [145,48,153,42],
                [264,62,270,60],    // 10
                [122,47,124,45],
                [189,39],
                [148,34],
                [138,42],
                [187,63],
                [231,47],
                [225,71,243,63],
                [121,49,125,47],
                [120,45,124,39],
                [240,60],            // 20
            ][level];

        // Takaken
        } else if (levelset == 5) {
            record = [
                [170,43],
                [185,42],
                [144,47],
                [250,69,256,67],
                [84,24],
                [170,60,180,52],
                [361,60,365,58],
            ][level];

        // Sokogen
        } else if (levelset == 6) {
            record = [
                [34,7],
                [23,7],
                [31,7,33,5],
                [25,9,27,7],
                [37,10],
                [55,12],
                [32,7],
                [45,13],
                [26,8],
                [33,7],
                [28,7],
                [34,11],
                [38,8],
                [37,10],
                [30,12],
                [31,6],
                [41,12,43,10],
                [31,11],
                [41,10],
                [51,15],
            ][level];

        // Murase
        } else if (levelset == 7) {
            record = [
                [86,12],
                [96,20,106,18],
                [44,13],
                [38,17],
                [69,20],
                [59,15],
                [55,14],
                [60,18],
                [55,16],
                [47,13],
                [104,26,105,24],
                [46,14,50,12],
                [46,12],
                [66,16,72,14],
                [58,14],
                [72,22],
                [42,16],
                [63,17],
                [48,15],
                [60,14],
            ][level];

        // Nabokosmos
        } else if (levelset == 8) {
            record = [
                [70,19],
                [120,40,150,36],
                [133,30,137,28],
                [178,55,186,51],
                [104,24],
                [132,29,134,27],
                [156,46,198,40],
                [147,32,175,30],
                [146,51],
                [211,49],
                [195,45,197,43],
                [119,29,121,27],
                [224,67,226,65],
                [104,30],
                [97,35],
                [104,27],
                [130,37],
                [164,25],
                [112,45],
                [148,35],
                [118,38,124,32],
                [174,43],
                [124,31,126,27],
                [132,40],
                [143,47],
                [245,75],
                [387,96,409,94],
                [147,49,157,43],
                [136,38],
                [113,36],
                [113,38,151,36],
                [262,65,264,63],
                [110,36,120,30],
                [158,50,158,50],
                [178,43,202,41],
                [132,37],
                [201,60],
                [69,27],
                [145,46],
                [171,42],
            ][level];

        // Petitesse
        } else if (levelset == 9) {
            record = [
                [29,4],
                [29,5],
                [45,12],
                [53,10],
                [63,11],
                [79,16],
                [70,17],
                [82,19],
                [78,20],
                [64,15],
                [66,19],
                [73,16],
                [106,26],
                [113,21],
                [182,39],
                [70,13],
                [91,18],
                [144,33],
            ][level];
        }

        // 179/17*
        // 179/17**
        // 353/54+
        // 353/54++

        // move record
        if (moves == record[0] && pushes == record[1]) {
            return "*"
        }
        if (moves < record[0] || (moves == record[0] && pushes < record[1])) {
            return "**"
        }

        // push record
        if (record.length == 4 && moves == record[2] && pushes == record[3]) {
            return "+"
        }
        if (record.length == 4 && (pushes < record[3] || (pushes == record[3] && moves < record[2]))) {
            return "++"
        }

        // no record
        return ""
    }
}