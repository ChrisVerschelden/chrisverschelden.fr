import { Line, Point, Level, GO_Set, Tile } from "./game_objects.js"

var lvl_1 = ""
var lvl_2 = ""
var lvl_3 = ""
var lvl_4 = ""
var lvl_5 = ""
var lvl_6 = ""
var lvl_7 = ""
var lvl_8 = ""
var lvl_9 = ""
var lvl_10 = ""

const levels = {
    1  : localStorage.getItem('level_1') !== null ? eval(localStorage.getItem('level_1')) : new Level(new GO_Set([]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32),
    2  : localStorage.getItem('level_2') !== null ? eval(localStorage.getItem('level_2')) : new Level(new GO_Set([]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32),
    3  : localStorage.getItem('level_3') !== null ? eval(localStorage.getItem('level_3')) : new Level(new GO_Set([]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32),
    4  : localStorage.getItem('level_4') !== null ? eval(localStorage.getItem('level_4')) : new Level(new GO_Set([]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32),
    5  : localStorage.getItem('level_5') !== null ? eval(localStorage.getItem('level_5')) : new Level(new GO_Set([]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32),
    6  : localStorage.getItem('level_6') !== null ? eval(localStorage.getItem('level_6')) : new Level(new GO_Set([]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32),
    7  : localStorage.getItem('level_7') !== null ? eval(localStorage.getItem('level_7')) : new Level(new GO_Set([]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32),
    8  : localStorage.getItem('level_8') !== null ? eval(localStorage.getItem('level_8')) : new Level(new GO_Set([]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32),
    9  : localStorage.getItem('level_9') !== null ? eval(localStorage.getItem('level_9')) : new Level(new GO_Set([]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32),
    10  : localStorage.getItem('level_10') !== null ? eval(localStorage.getItem('level_10')) : new Level(new GO_Set([]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32),
}

export { levels }