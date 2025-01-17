namespace SpriteKind {
    export const Crate = SpriteKind.create()
}
function reset_states() {
    pressed_up = 0
    pressed_down = 0
    pressed_left = 0
    pressed_right = 0
    pressed_A = 0
    pressed_B = 0
    undo = []
    count_moves = 0
    count_pushes = 0
    tiles.destroySpritesOfKind(SpriteKind.Player)
    tiles.destroySpritesOfKind(SpriteKind.Crate)
    tiles.destroySpritesOfKind(SpriteKind.Text)
    scene.centerCameraAt(80, 60)
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    pressed_A = 0
})
function set_up_selection() {
    state_level = 0
    button_lag = 6
    menu_selection = 1
    select_level = level
    select_levelset = levelset
    scene.centerCameraAt(80, 60)
    mySprite2 = sprites.create(assets.image`bg selection`, SpriteKind.Text)
    text_title = textsprite.create(" ", 0, 7)
    text_title.setMaxFontHeight(8)
    text_title.setPosition(24, 15)
    text_title.setBorder(1, 0, 2)
    text_title.setText("Soko-Chan Menu")
    menu_items = []
    add_menu_item(35, "Group", true)
    add_menu_item(50, "Level", true)
    add_menu_item(65, "Help", false)
    add_menu_item(80, "Credits", false)
    text_footer = textsprite.create("=Choose  A=OK  B=Back", 0, 13)
    text_footer.setMaxFontHeight(8)
    text_footer.setIcon(assets.image`icon arrows updown`)
    text_footer.setPosition(80, 110)
    minimap = sprites.create(scale_thumbnail(get_level_asset(select_levelset, select_level)), SpriteKind.Text)
    minimap.setPosition(122, 64)
    text_best = textsprite.create("00/00", 0, 6)
    text_best.setMaxFontHeight(8)
    text_best.setPosition(120, 90)
    hilight_menu_item()
    draw_selection()
    state_selection = 1
    reset_buttons()
}
function set_up_level() {
    reset_states()
    state_selection = 0
    blockSettings.writeNumber("recent group", levelset)
    blockSettings.writeNumber("recent level", level)
    scene.setTileMap(get_level_asset(levelset, level))
    set_level_skin(false)
    realize_tilemap()
    return_to_level()
    introduce_level()
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    pressed_down = 0
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    pressed_up = 0
})
function reset_buttons() {
    pressed_up = button_lag
    pressed_down = button_lag
    pressed_left = button_lag
    pressed_right = button_lag
    pressed_A = button_lag
    pressed_B = button_lag
}
function get_level_asset_cantrip(lv: number) {
    if (lv == 1) {
        return assets.image`level cantrip 01`
    } else if (lv == 2) {
        return assets.image`level cantrip 02`
    } else if (lv == 3) {
        return assets.image`level cantrip 03`
    } else if (lv == 4) {
        return assets.image`level cantrip 04`
    } else if (lv == 5) {
        return assets.image`level cantrip 05`
    } else if (lv == 6) {
        return assets.image`level cantrip 06`
    } else if (lv == 7) {
        return assets.image`level cantrip 07`
    } else if (lv == 8) {
        return assets.image`level cantrip 08`
    } else if (lv == 9) {
        return assets.image`level cantrip 09`
    } else if (lv == 10) {
        return assets.image`level cantrip 10`
    } else if (lv == 11) {
        return assets.image`level cantrip 11`
    } else if (lv == 12) {
        return assets.image`level cantrip 12`
    } else if (lv == 13) {
        return assets.image`level cantrip 13`
    } else if (lv == 14) {
        return assets.image`level cantrip 14`
    } else if (lv == 15) {
        return assets.image`level cantrip 15`
    } else if (lv == 16) {
        return assets.image`level cantrip 16`
    } else if (lv == 17) {
        return assets.image`level cantrip 17`
    } else if (lv == 18) {
        return assets.image`level cantrip 18`
    } else if (lv == 19) {
        return assets.image`level cantrip 19`
    } else if (lv == 20) {
        return assets.image`level cantrip 20`
    }
    return assets.image`level cantrip 01`
}
function get_level_asset_declercq(lv: number) {
    return [
        assets.image`level blocks 01`,
        assets.image`level blocks 02`,
        assets.image`level blocks 03`,
        assets.image`level blocks 04`,
        assets.image`level blocks 05`,
        assets.image`level blocks 06`,
        assets.image`level blocks 07`,
        assets.image`level blocks 08`,
        assets.image`level blocks 09`,
        assets.image`level blocks 10`,
        assets.image`level various 01`,
        assets.image`level various 02`,
        assets.image`level various 03`,
        assets.image`level various 04`,
        assets.image`level various 05`,
        assets.image`level various 06`,
        assets.image`level various 07`,
        assets.image`level various 08`,
        assets.image`level various 09`,
        assets.image`level various 10`
    ][lv - 1]
}
function add_menu_item(y: number, text: string, changeable: boolean) {
    t = textsprite.create(" ", 0, 6)
    t.setMaxFontHeight(8)
    t.setPosition(24, y)
    if (changeable) {
        t.setIcon(assets.image`icon arrows leftright`)
    }
    t.setBorder(1, 0, 2)
    t.setText(text)
    menu_items[menu_items.length] = t
}
function get_level_asset_petitesse(lv: number) {
    if (lv == 1) {
        return assets.image`level petitesse 01`
    } else if (lv == 2) {
        return assets.image`level petitesse 02`
    } else if (lv == 3) {
        return assets.image`level petitesse 03`
    } else if (lv == 4) {
        return assets.image`level petitesse 04`
    } else if (lv == 5) {
        return assets.image`level petitesse 05`
    } else if (lv == 6) {
        return assets.image`level petitesse 06`
    } else if (lv == 7) {
        return assets.image`level petitesse 07`
    } else if (lv == 8) {
        return assets.image`level petitesse 08`
    } else if (lv == 9) {
        return assets.image`level petitesse 09`
    } else if (lv == 10) {
        return assets.image`level petitesse 10`
    } else if (lv == 11) {
        return assets.image`level petitesse 11`
    } else if (lv == 12) {
        return assets.image`level petitesse 12`
    } else if (lv == 13) {
        return assets.image`level petitesse 13`
    } else if (lv == 14) {
        return assets.image`level petitesse 14`
    } else if (lv == 15) {
        return assets.image`level petitesse 15`
    } else if (lv == 16) {
        return assets.image`level petitesse 16`
    } else if (lv == 17) {
        return assets.image`level petitesse 17`
    } else if (lv == 18) {
        return assets.image`level petitesse 18`
    }
    return assets.image`level petitesse 01`
}
function update_moves() {
    update_camera()
    text_moves.setText("" + convertToText(count_moves) + "/" + convertToText(count_pushes))
    text_moves.setPosition(scene.cameraProperty(CameraProperty.X) + 81 - text_moves.width / 2, scene.cameraProperty(CameraProperty.Y) - 55)
}
function set_level_skin(random: boolean) {
    level_skin = levelset
    if (random) {
        level_skin = randint(1, 9)
    }
    if (level_skin == 1) {
        list_skin_sprites = [
            assets.image`wall purple bricks`,
            assets.image`crate wood`,
            assets.image`crate wood on target`,
            assets.image`floor dark purple`,
            assets.image`target dark purple`
        ]
    } else if (level_skin == 2) {
        list_skin_sprites = [
            assets.image`wall steel`,
            assets.image`crate wood2`,
            assets.image`crate wood2 on target`,
            assets.image`floor tan dotted`,
            assets.image`target tan dotted`
        ]
    } else if (level_skin == 3) {
        list_skin_sprites = [
            assets.image`wall dark brown bricks`,
            assets.image`crate drawer`,
            assets.image`crate drawer on target`,
            assets.image`floor tan dotted`,
            assets.image`target tan dotted`
        ]
    } else if (level_skin == 4) {
        list_skin_sprites = [
            assets.image`wall dark purple bricks`,
            assets.image`crate wood2`,
            assets.image`crate wood2 on target`,
            assets.image`floor tan dotted`,
            assets.image`target tan dotted`
        ]
    } else if (level_skin == 5) {
        list_skin_sprites = [
            assets.image`wall steel`,
            assets.image`crate wood2`,
            assets.image`crate wood2 on target`,
            assets.image`floor tan dotted`,
            assets.image`target tan dotted`
        ]
    } else if (level_skin == 6) {
        list_skin_sprites = [
            assets.image`wall dark steel`,
            assets.image`crate chest`,
            assets.image`crate chest on target`,
            assets.image`floor light purple dotted`,
            assets.image`target light purple dotted`
        ]
    } else if (level_skin == 7) {
        list_skin_sprites = [
            assets.image`wall steel`,
            assets.image`crate wood`,
            assets.image`crate wood on target`,
            assets.image`floor tan dotted`,
            assets.image`target tan dotted`
        ]
    } else if (level_skin == 8) {
        list_skin_sprites = [
            assets.image`wall dark brown bricks`,
            assets.image`crate drawer`,
            assets.image`crate drawer on target`,
            assets.image`floor tan dotted`,
            assets.image`target tan dotted`
        ]
    } else if (level_skin == 9) {
        list_skin_sprites = [
            assets.image`wall teal bricks`,
            assets.image`crate wood`,
            assets.image`crate wood on target`,
            assets.image`floor tan dotted`,
            assets.image`target tan dotted`
        ]
    } else {
        list_skin_sprites = [
            assets.image`wall steel`,
            assets.image`crate wood`,
            assets.image`crate wood on target`,
            assets.image`floor tan dotted`,
            assets.image`target tan dotted`
        ]
    }
}
function level_best_id(group: number, level: number) {
    return "best-" + convertToText(group) + "-" + convertToText(level)
}
function scale_thumbnail(src: Image) {
    thumbnail = image.create(45, 0)
    for (let x = 0; x <= 14; x++) {
        for (let y = 0; y <= 11; y++) {
            thumbnail.fillRect(x * 3, y * 3, 3, 3, src.getPixel(x, y))
        }
    }
    thumbnail.drawLine(0, 0, 44, 0, 6)
    thumbnail.drawLine(0, 35, 44, 35, 6)
    thumbnail.drawLine(0, 0, 0, 35, 6)
    thumbnail.drawLine(44, 0, 44, 35, 6)
    return thumbnail
}
function show_help() {
    game.showLongText("---  Soko-Chan Help  --- " + "                         " + "Push the crates onto " + "the targets. You win " + "when all targets are " + "occupied by crates." + "              " + "                         " + "-  Arrow keys - Move      " + "-  B button   - Undo      " + "-  A button   - Menu      ", DialogLayout.Full)
    game.showLongText("---  Soko-Chan Help  --- " + "                         " + "When in menu, press A immediately to " + "reset the current level, or choose a different level, then press A." + "                                        " + "When in menu, press B to " + "return to the level as you left it.", DialogLayout.Full)
}
function get_level_asset_takaken(lv: number) {
    return [
        assets.image`level takaken 1`,
        assets.image`level takaken 2`,
        assets.image`level takaken 3`,
        assets.image`level takaken 4`,
        assets.image`level takaken 5`,
        assets.image`level takaken 6`,
        assets.image`level takaken 7`
    ][lv - 1]
}
function get_level_asset_microcosmos(lv: number) {
    if (lv == 1) {
        return assets.image`level microcosmos 01`
    } else if (lv == 2) {
        return assets.image`level microcosmos 02`
    } else if (lv == 3) {
        return assets.image`level microcosmos 03`
    } else if (lv == 4) {
        return assets.image`level microcosmos 04`
    } else if (lv == 5) {
        return assets.image`level microcosmos 05`
    } else if (lv == 6) {
        return assets.image`level microcosmos 06`
    } else if (lv == 7) {
        return assets.image`level microcosmos 07`
    } else if (lv == 8) {
        return assets.image`level microcosmos 08`
    } else if (lv == 9) {
        return assets.image`level microcosmos 09`
    } else if (lv == 10) {
        return assets.image`level microcosmos 10`
    } else if (lv == 11) {
        return assets.image`level microcosmos 11`
    } else if (lv == 12) {
        return assets.image`level microcosmos 12`
    } else if (lv == 13) {
        return assets.image`level microcosmos 13`
    } else if (lv == 14) {
        return assets.image`level microcosmos 14`
    } else if (lv == 15) {
        return assets.image`level microcosmos 15`
    } else if (lv == 16) {
        return assets.image`level microcosmos 16`
    } else if (lv == 17) {
        return assets.image`level microcosmos 17`
    } else if (lv == 18) {
        return assets.image`level microcosmos 18`
    } else if (lv == 19) {
        return assets.image`level microcosmos 19`
    } else if (lv == 20) {
        return assets.image`level microcosmos 20`
    } else if (lv == 21) {
        return assets.image`level microcosmos 21`
    } else if (lv == 22) {
        return assets.image`level microcosmos 22`
    } else if (lv == 23) {
        return assets.image`level microcosmos 23`
    } else if (lv == 24) {
        return assets.image`level microcosmos 24`
    } else if (lv == 25) {
        return assets.image`level microcosmos 25`
    } else if (lv == 26) {
        return assets.image`level microcosmos 26`
    } else if (lv == 27) {
        return assets.image`level microcosmos 27`
    } else if (lv == 28) {
        return assets.image`level microcosmos 28`
    } else if (lv == 29) {
        return assets.image`level microcosmos 29`
    } else if (lv == 30) {
        return assets.image`level microcosmos 30`
    } else if (lv == 31) {
        return assets.image`level microcosmos 31`
    } else if (lv == 32) {
        return assets.image`level microcosmos 32`
    } else if (lv == 33) {
        return assets.image`level microcosmos 33`
    } else if (lv == 34) {
        return assets.image`level microcosmos 34`
    } else if (lv == 35) {
        return assets.image`level microcosmos 35`
    } else if (lv == 36) {
        return assets.image`level microcosmos 36`
    } else if (lv == 37) {
        return assets.image`level microcosmos 37`
    } else if (lv == 38) {
        return assets.image`level microcosmos 38`
    } else if (lv == 39) {
        return assets.image`level microcosmos 39`
    } else if (lv == 40) {
        return assets.image`level microcosmos 40`
    }
    return assets.image`level microcosmos 01`
}
function move_to(tx: number, ty: number, push_tx: number, push_ty: number) {
    if (!(tiles.tileIsWall(tiles.getTileLocation(tx, ty)))) {
        if (box_on_tile(tx, ty)) {
            if (!(tiles.tileIsWall(tiles.getTileLocation(push_tx, push_ty)))) {
                if (!(box_on_tile(push_tx, push_ty))) {
                    undo.push([
                        tiles.locationXY(tiles.locationOfSprite(ban), tiles.XY.column),
                        tiles.locationXY(tiles.locationOfSprite(ban), tiles.XY.row),
                        tx,
                        ty,
                        push_tx,
                        push_ty
                    ])
                    move_box(tx, ty, push_tx, push_ty)
                    move_ban(tx, ty)
                    count_moves += 1
                    count_pushes += 1
                }
            }
        } else {
            undo.push([tiles.locationXY(tiles.locationOfSprite(ban), tiles.XY.column), tiles.locationXY(tiles.locationOfSprite(ban), tiles.XY.row)])
            music.footstep.play()
            move_ban(tx, ty)
            count_moves += 1
        }
        update_moves()
    }
}
function ask_for_next_level() {
    str_record = "New best solution."
    str_score_action = ""
    let readSettings = blockSettings.readNumberArray(level_best_id(levelset, level))

    if (readSettings != undefined) {
        record = blockSettings.readNumberArray(level_best_id(levelset, level))
        str_record = "Your best:    " + record[0] + "/" + record[1] + game.isSokobanRecord(
            levelset,
            level - 1,
            record[0],
            record[1]
        )
        if (count_moves < record[0] || record[0] == 0) {
            str_score_action = "New best! "
            blockSettings.writeNumberArray(level_best_id(levelset, level), [count_moves, count_pushes])
        }
    } else {
        blockSettings.writeNumberArray(level_best_id(levelset, level), [count_moves, count_pushes])
    }
    return game.askNextLevel("Moves/Pushes: " + count_moves + "/" + count_pushes + game.isSokobanRecord(
        levelset,
        level - 1,
        count_moves,
        count_pushes
    ), str_record, str_score_action)
}
function hilight_menu_item() {
    for (let t = 0; t <= 3; t++) {
        if (t == menu_selection) {
            menu_items[t].setBorder(1, 9, 2)
        } else {
            menu_items[t].setBorder(1, 0, 2)
        }
    }
}
/**
 * tx, ty are tileset coordinates
 * 
 * dtx, dty are relative deviations of tileset coordinates
 * 
 * x, y are pixel screen coordinates
 */
function walk(dtx: number, dty: number) {
    move_to(tiles.locationXY(tiles.locationOfSprite(ban), tiles.XY.column) + dtx, tiles.locationXY(tiles.locationOfSprite(ban), tiles.XY.row) + dty, tiles.locationXY(tiles.locationOfSprite(ban), tiles.XY.column) + 2 * dtx, tiles.locationXY(tiles.locationOfSprite(ban), tiles.XY.row) + 2 * dty)
}
function draw_selection() {
    menu_items[0].setText("Group: " + list_levelsets[select_levelset])
    menu_items[1].setText("Level: " + convertToText(select_level))
    let readSettings = blockSettings.readNumberArray(level_best_id(levelset, level))
    if (readSettings != undefined && blockSettings.readNumberArray(level_best_id(select_levelset, select_level))[0] > 0) {
        text_best.setText("" + blockSettings.readNumberArray(level_best_id(select_levelset, select_level))[0] + "/" + blockSettings.readNumberArray(level_best_id(select_levelset, select_level))[1] + game.isSokobanRecord(
            select_levelset,
            select_level - 1,
            blockSettings.readNumberArray(level_best_id(select_levelset, select_level))[0],
            blockSettings.readNumberArray(level_best_id(select_levelset, select_level))[1]
        ))
    } else {
        text_best.setText("")
    }
    minimap.setImage(scale_thumbnail(get_level_asset(select_levelset, select_level)))
}
function show_credits() {
    game.showLongText("---  Level  Credits  --- " + "                         " + "Tutorial                 " + ":   by Moobot            " + "Microban (easy)          " + ":   by David Skinner     " + "Blocks+co (easy/tricky)  " + ":   by Dries de Clercq   " + "Microcosmos (tricky)     " + ":   by Aymeric du Peloux " + "Cantrip (tricky/hard)    " + ":   by David Holland", DialogLayout.Full)
    game.showLongText("---  Level  Credits  --- " + "                         " + "Takaken (hard)           " + ": by Kenichiro Takahashi " + "Sokogen (easy)           " + ": genr.by Jacques Duthen " + "Murase (tricky)          " + ": gener.by Yoshio Murase " + "Nabokosmos (hard)        " + ":   by Aymeric du Peloux " + "Petitesse (tricky)       " + ":   by niwa", DialogLayout.Full)
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    pressed_left = 0
})
/**
 * Check win condition and manage buttons in a continuous loop.
 * 
 * A win is when all boxes stand on a target tile.
 * 
 * Direction buttons can be pressed repeatedly without delay. They can be pressed continuously, in which case Soko-Chan continues to move, but not too fast.
 * 
 * Button B must be blocked during menu, otherwise a B press during menu will be handled as undo action when the menu returns.
 */
function next_level() {
    level += 1
    if (level > list_groupsize[levelset]) {
        level = 1
        levelset += 1
        game.splash("You finished this group.", "Next group: " + list_levelsets[levelset])
        if (levelset >= list_levelsets.length) {
            levelset = 0
        }
    }
    set_up_level()
}
/**
 * Determine if a box is on a specific tile by comparing their absolute x and y pixel coordiates. Use pixels, because the color-coded Tile object lacks a mechanism to get its tileset coordinates.
 */
function all_boxes_fit() {
    for (let c of sprites.allOfKind(SpriteKind.Crate)) {
        if (!(target_tile(c.x, c.y))) {
            return 0
        }
    }
    if (sprites.allOfKind(SpriteKind.Crate).length > 0) {
        if (count_pushes > 0) {
            return 1
        }
    }
    return 0
}
function undo_move() {
    if (undo.length > 0) {
        undo_step = undo.pop()
        move_ban(undo_step[0], undo_step[1])
        count_moves += -1
        if (undo_step.length == 6) {
            move_box(undo_step[4], undo_step[5], undo_step[2], undo_step[3])
            count_pushes += -1
        } else {
            music.footstep.play()
        }
        update_moves()
    }
}
function control_level() {
    if (all_boxes_fit()) {
        pause(500)
        ban.setImage(assets.image`sokochan win`)
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Whole))
        if (ask_for_next_level()) {
            next_level()
        } else {
            undo_move()
            pressed_B = button_lag
        }
    }
    if (controller.up.isPressed() && !(pressed_up)) {
        walk(0, -1)
        pressed_up = button_lag
    }
    if (controller.down.isPressed() && !(pressed_down)) {
        walk(0, 1)
        pressed_down = button_lag
    }
    if (controller.left.isPressed() && !(pressed_left)) {
        walk(-1, 0)
        pressed_left = button_lag
    }
    if (controller.right.isPressed() && !(pressed_right)) {
        walk(1, 0)
        pressed_right = button_lag
    }
    if (controller.A.isPressed() && !(pressed_A)) {
        set_up_selection()
        reset_buttons()
    }
    if (controller.B.isPressed() && !(pressed_B)) {
        undo_move()
        pressed_B = button_lag
    }
}
function return_to_level() {
    state_selection = 0
    button_lag = 9
    tiles.destroySpritesOfKind(SpriteKind.Text)
    scene.centerCameraAt(screen_center_x(), screen_center_y())
    if (scroll_level()) {
        scene.cameraFollowSprite(ban)
    }
    update_camera()
    text_moves = textsprite.create("0/0", 0, 11)
    text_moves.setOutline(1, 15)
    text_moves.setBorder(1, 0)
    text_moves.setMaxFontHeight(8)
    update_moves()
    reset_buttons()
    state_level = 1
}
function scroll_level() {
    if (levelset == 1) {
        // Microban
        return [
            8,
            35,
            36,
            49
        ].indexOf(level) >= 0
    }
    if (levelset == 8) {
        // Nabokosmos
        return [
            2,
            7,
            11,
            16,
            34,
            39
        ].indexOf(level) >= 0
    }
    if (levelset == 5) {
        // Takaken
        return [3, 6, 7].indexOf(level) >= 0
    }
    if (levelset == 4) {
        // Cantrip
        return [
            4,
            15,
            16,
            20
        ].indexOf(level) >= 0
    }
    if (levelset == 3) {
        // Microcosmos
        return [
            2,
            10,
            14,
            22,
            26,
            30
        ].indexOf(level) >= 0
    }
    return false
}
// Force camera to update its position right now, following the moved sprite. Otherwise, the fixed text (e.g. move counter) shuffles around, because it renders either too early, or too late.
function update_camera() {
    game.currentScene().camera.update()
}
function introduce_level() {
    text_frame = textsprite.create("       ", 13, 13)
    text_introduction = textsprite.create("" + list_levelsets[levelset] + " " + convertToText(level), 0, 12)
    text_introduction.setMaxFontHeight(16)
    text_frame.setMaxFontHeight(20)
    text_frame.setBorder(1, 12)
    text_introduction.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
    text_frame.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
    music.bigCrash.play()
    pause(1000)
    text_introduction.destroy()
    text_frame.destroy()
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    pressed_B = 0
})
function move_ban(to_tx: number, to_ty: number) {
    tiles.placeOnTile(ban, tiles.getTileLocation(to_tx, to_ty))
    if (target_tile(tiles.locationXY(tiles.getTileLocation(to_tx, to_ty), tiles.XY.x), tiles.locationXY(tiles.getTileLocation(to_tx, to_ty), tiles.XY.y))) {
        ban.setImage(assets.image`sokochan on target`)
    } else {
        ban.setImage(assets.image`sokochan`)
    }
}
function get_level_asset_sokogen(lv: number) {
    return [
        assets.image`level sokogen 01`,
        assets.image`level sokogen 02`,
        assets.image`level sokogen 03`,
        assets.image`level sokogen 04`,
        assets.image`level sokogen 05`,
        assets.image`level sokogen 06`,
        assets.image`level sokogen 07`,
        assets.image`level sokogen 08`,
        assets.image`level sokogen 09`,
        assets.image`level sokogen 10`,
        assets.image`level sokogen 11`,
        assets.image`level sokogen 12`,
        assets.image`level sokogen 13`,
        assets.image`level sokogen 14`,
        assets.image`level sokogen 15`,
        assets.image`level sokogen 16`,
        assets.image`level sokogen 17`,
        assets.image`level sokogen 18`,
        assets.image`level sokogen 19`,
        assets.image`level sokogen 20`
    ][lv - 1]
}
function box_on_tile(tx: number, ty: number) {
    for (let c of sprites.allOfKind(SpriteKind.Crate)) {
        if (tiles.locationXY(tiles.locationOfSprite(c), tiles.XY.column) == tx) {
            if (tiles.locationXY(tiles.locationOfSprite(c), tiles.XY.row) == ty) {
                return 1
            }
        }
    }
    return 0
}
/**
 * Soko-Chan
 * 
 * TODO
 * 
 * - fix: on scrolling levels that have a width of 11 tiles, the move counter jumps around a bit (Nabokosmos 7)
 * 
 * Included Features
 * 
 * * many puzzles from different puzzle sets
 * 
 * * unlimited undo
 * 
 * * push/move counter
 * 
 * * remember personal best move scores between power-offs
 * 
 * * remember recently opened puzzle between power-offs
 * 
 * * continuous movement when button is being held down
 * 
 * * different sprites when on target tile
 * 
 * * puzzle selection menu with minimap
 * 
 * * help and credits
 * 
 * * puzzle reset
 * 
 * * puzzles of up to 11x9 tiles show without scrolling (up to 10x7 tiles of walkable area)
 * 
 * * different tile sets for different puzzle sets
 * 
 * Nice to Have
 * 
 * - a way to handle large levels without scrolling, maybe through smaller 8x8 sprite tilemaps
 */
function screen_center_x() {
    return tiles.tilemapColumns() * tiles.tileWidth() / 2
}
function get_level_asset_microban(lv: number) {
    if (lv == 1) {
        return assets.image`level microban 01`
    } else if (lv == 2) {
        return assets.image`level microban 02`
    } else if (lv == 3) {
        return assets.image`level microban 03`
    } else if (lv == 4) {
        return assets.image`level microban 04`
    } else if (lv == 5) {
        return assets.image`level microban 05`
    } else if (lv == 6) {
        return assets.image`level microban 06`
    } else if (lv == 7) {
        return assets.image`level microban 07`
    } else if (lv == 8) {
        return assets.image`level microban 08`
    } else if (lv == 9) {
        return assets.image`level microban 09`
    } else if (lv == 10) {
        return assets.image`level microban 10`
    } else if (lv == 11) {
        return assets.image`level microban 11`
    } else if (lv == 12) {
        return assets.image`level microban 12`
    } else if (lv == 13) {
        return assets.image`level microban 13`
    } else if (lv == 14) {
        return assets.image`level microban 14`
    } else if (lv == 15) {
        return assets.image`level microban 15`
    } else if (lv == 16) {
        return assets.image`level microban 16`
    } else if (lv == 17) {
        return assets.image`level microban 17`
    } else if (lv == 18) {
        return assets.image`level microban 18`
    } else if (lv == 19) {
        return assets.image`level microban 19`
    } else if (lv == 20) {
        return assets.image`level microban 20`
    } else if (lv == 21) {
        return assets.image`level microban 21`
    } else if (lv == 22) {
        return assets.image`level microban 22`
    } else if (lv == 23) {
        return assets.image`level microban 23`
    } else if (lv == 24) {
        return assets.image`level microban 24`
    } else if (lv == 25) {
        return assets.image`level microban 25`
    } else if (lv == 26) {
        return assets.image`level microban 26`
    } else if (lv == 27) {
        return assets.image`level microban 27`
    } else if (lv == 28) {
        return assets.image`level microban 28`
    } else if (lv == 29) {
        return assets.image`level microban 29`
    } else if (lv == 30) {
        return assets.image`level microban 30`
    } else if (lv == 31) {
        return assets.image`level microban 31`
    } else if (lv == 32) {
        return assets.image`level microban 32`
    } else if (lv == 33) {
        return assets.image`level microban 33`
    } else if (lv == 34) {
        return assets.image`level microban 34`
    } else if (lv == 35) {
        return assets.image`level microban 35`
    } else if (lv == 36) {
        return assets.image`level microban 36`
    } else if (lv == 37) {
        return assets.image`level microban 37`
    } else if (lv == 38) {
        return assets.image`level microban 38`
    } else if (lv == 39) {
        return assets.image`level microban 39`
    } else if (lv == 40) {
        return assets.image`level microban 40`
    } else if (lv == 41) {
        return assets.image`level microban 41`
    } else if (lv == 42) {
        return assets.image`level microban 42`
    } else if (lv == 43) {
        return assets.image`level microban 43`
    } else if (lv == 44) {
        return assets.image`level microban 44`
    } else if (lv == 45) {
        return assets.image`level microban 45`
    } else if (lv == 46) {
        return assets.image`level microban 46`
    } else if (lv == 47) {
        return assets.image`level microban 47`
    } else if (lv == 48) {
        return assets.image`level microban 48`
    } else if (lv == 49) {
        return assets.image`level microban 49`
    } else if (lv == 50) {
        return assets.image`level microban 50`
    } else if (lv == 51) {
        return assets.image`level microban 51`
    } else if (lv == 52) {
        return assets.image`level microban 52`
    }
    return assets.image`level microban 01`
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    pressed_right = 0
})
function get_level_asset(group: number, lv: number) {
    if (group == 1) {
        return get_level_asset_microban(lv)
    } else if (group == 2) {
        return get_level_asset_declercq(lv)
    } else if (group == 3) {
        return get_level_asset_microcosmos(lv)
    } else if (group == 4) {
        return get_level_asset_cantrip(lv)
    } else if (group == 5) {
        return get_level_asset_takaken(lv)
    } else if (group == 6) {
        return get_level_asset_sokogen(lv)
    } else if (group == 7) {
        return get_level_asset_murase(lv)
    } else if (group == 8) {
        return get_level_asset_nabo(lv)
    } else if (group == 9) {
        return get_level_asset_petitesse(lv)
    } else {
        return get_level_asset_tutorial(lv)
    }
}
function move_box(from_tx: number, from_ty: number, to_tx: number, to_ty: number) {
    for (let c of sprites.allOfKind(SpriteKind.Crate)) {
        if (c.x == tiles.locationXY(tiles.getTileLocation(from_tx, from_ty), tiles.XY.x) && c.y == tiles.locationXY(tiles.getTileLocation(from_tx, from_ty), tiles.XY.y)) {
            tiles.placeOnTile(c, tiles.getTileLocation(to_tx, to_ty))
            if (target_tile(tiles.locationXY(tiles.getTileLocation(to_tx, to_ty), tiles.XY.x), tiles.locationXY(tiles.getTileLocation(to_tx, to_ty), tiles.XY.y))) {
                music.knock.play()
                c.setImage(list_skin_sprites[2])
            } else {
                music.thump.play()
                c.setImage(list_skin_sprites[1])
            }
            return
        }
    }
}
function screen_center_y() {
    return tiles.tilemapRows() * tiles.tileWidth() / 2
}
function control_selection() {
    if (controller.up.isPressed() && !(pressed_up)) {
        menu_selection += -1
        menu_selection = (menu_selection + 4) % 4
        hilight_menu_item()
        music.footstep.play()
        pressed_up = button_lag
    }
    if (controller.down.isPressed() && !(pressed_down)) {
        menu_selection += 1
        menu_selection = (menu_selection + 4) % 4
        hilight_menu_item()
        music.footstep.play()
        pressed_down = button_lag
    }
    if (menu_selection == 0) {
        if (controller.left.isPressed() && !(pressed_left)) {
            select_levelset += -1
            select_levelset = (select_levelset + list_levelsets.length) % list_levelsets.length
            if (select_level > list_groupsize[select_levelset]) {
                select_level = list_groupsize[select_levelset]
            }
            draw_selection()
            music.knock.play()
            pressed_left = button_lag
        }
        if (controller.right.isPressed() && !(pressed_right)) {
            select_levelset += 1
            select_levelset = (select_levelset + list_levelsets.length) % list_levelsets.length
            if (select_level > list_groupsize[select_levelset]) {
                select_level = list_groupsize[select_levelset]
            }
            draw_selection()
            music.knock.play()
            pressed_right = button_lag
        }
    }
    if (menu_selection == 1) {
        if (controller.left.isPressed() && !(pressed_left)) {
            select_level += -1
            select_level = (select_level - 1 + list_groupsize[select_levelset]) % list_groupsize[select_levelset] + 1
            draw_selection()
            music.thump.play()
            pressed_left = button_lag
        }
        if (controller.right.isPressed() && !(pressed_right)) {
            select_level += 1
            select_level = (select_level - 1 + list_groupsize[select_levelset]) % list_groupsize[select_levelset] + 1
            draw_selection()
            music.thump.play()
            pressed_right = button_lag
        }
    }
    if (controller.A.isPressed() && !(pressed_A)) {
        if (menu_selection <= 1) {
            level = select_level
            levelset = select_levelset
            set_up_level()
        } else if (menu_selection == 2) {
            show_help()
            pressed_A = button_lag
        } else {
            show_credits()
            pressed_A = button_lag
        }
    }
    if (controller.B.isPressed() && !(pressed_B)) {
        return_to_level()
    }
}
function decay_button_lag() {
    if (pressed_up) {
        pressed_up += -1
    }
    if (pressed_down) {
        pressed_down += -1
    }
    if (pressed_left) {
        pressed_left += -1
    }
    if (pressed_right) {
        pressed_right += -1
    }
    if (pressed_A) {
        pressed_A += -1
    }
    if (pressed_B) {
        pressed_B += -1
    }
}
function get_level_asset_murase(lv: number) {
    if (lv == 1) {
        return assets.image`level murase 01`
    } else if (lv == 2) {
        return assets.image`level murase 02`
    } else if (lv == 3) {
        return assets.image`level murase 03`
    } else if (lv == 4) {
        return assets.image`level murase 04`
    } else if (lv == 5) {
        return assets.image`level murase 05`
    } else if (lv == 6) {
        return assets.image`level murase 06`
    } else if (lv == 7) {
        return assets.image`level murase 07`
    } else if (lv == 8) {
        return assets.image`level murase 08`
    } else if (lv == 9) {
        return assets.image`level murase 09`
    } else if (lv == 10) {
        return assets.image`level murase 10`
    } else if (lv == 11) {
        return assets.image`level murase 11`
    } else if (lv == 12) {
        return assets.image`level murase 12`
    } else if (lv == 13) {
        return assets.image`level murase 13`
    } else if (lv == 14) {
        return assets.image`level murase 14`
    } else if (lv == 15) {
        return assets.image`level murase 15`
    } else if (lv == 16) {
        return assets.image`level murase 16`
    } else if (lv == 17) {
        return assets.image`level murase 17`
    } else if (lv == 18) {
        return assets.image`level murase 18`
    } else if (lv == 19) {
        return assets.image`level murase 19`
    } else if (lv == 20) {
        return assets.image`level murase 20`
    }
    return assets.image`level murase 01`
}
/**
 * Tile coding:
 * 
 * 14 brown  -- wall (#)
 * 
 *   3 pink     -- target (.)
 * 
 *   7 green   -- player (@)
 * 
 *   6 teal      -- player on target (+)
 * 
 *   4 orange -- crate ($)
 * 
 *   2 red       -- crate on target (*)
 * 
 * 13 tan       -- floor
 */
function realize_tilemap() {
    for (let e of scene.getTilesByType(2)) {
        box = sprites.create(list_skin_sprites[2], SpriteKind.Crate)
        scene.place(e, box)
        scene.setTileAt(e, 3)
    }
    for (let e of scene.getTilesByType(4)) {
        box = sprites.create(list_skin_sprites[1], SpriteKind.Crate)
        scene.place(e, box)
        scene.setTileAt(e, 13)
    }
    for (let e of scene.getTilesByType(6)) {
        ban = sprites.create(assets.image`sokochan on target`, SpriteKind.Player)
        scene.place(e, ban)
        scene.setTileAt(e, 3)
    }
    for (let e of scene.getTilesByType(7)) {
        ban = sprites.create(assets.image`sokochan`, SpriteKind.Player)
        scene.place(e, ban)
        scene.setTileAt(e, 13)
    }
    scene.setTile(3, list_skin_sprites[4], false)
    scene.setTile(13, list_skin_sprites[3], false)
    scene.setTile(14, list_skin_sprites[0], true)
}
/**
 * When the user opens the system menu, it does some sort of context switch, but continues executing any functions. When any function waits on a "pause" return, the system menu opens in between, and the "pause" returns, any succeeding commands execute right then, even if they cannot do much, because the variables have been switched away.
 * 
 * This results in broken levels and banners when the user opens the system menu during the game or level introduction.
 */
/**
 * Variables
 * 
 * setup scope
 * 
 * e
 * 
 * control scope
 * 
 * c, t, x, y
 */
function introduce_game() {
    scene.setTileMap(assets.image`game intro`)
    set_level_skin(true)
    realize_tilemap()
    scene.centerCameraAt(screen_center_x(), screen_center_y())
    update_camera()
    text_frame = textsprite.create("       ", 13, 13)
    text_introduction = textsprite.create("SOKOCHAN", 0, 12)
    text_introduction.setMaxFontHeight(16)
    text_frame.setMaxFontHeight(20)
    text_frame.setBorder(1, 12)
    text_introduction.setPosition(scene.cameraProperty(CameraProperty.X), 40)
    text_frame.setPosition(scene.cameraProperty(CameraProperty.X), 40)
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Whole))
    ban.setImage(assets.image`sokochan win`)
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Whole))
    pause(1500)
    ban.destroy()
    text_introduction.destroy()
    text_frame.destroy()
}
function get_level_asset_nabo(lv: number) {
    if (lv == 1) {
        return assets.image`level nabo 01`
    } else if (lv == 2) {
        return assets.image`level nabo 02`
    } else if (lv == 3) {
        return assets.image`level nabo 03`
    } else if (lv == 4) {
        return assets.image`level nabo 04`
    } else if (lv == 5) {
        return assets.image`level nabo 05`
    } else if (lv == 6) {
        return assets.image`level nabo 06`
    } else if (lv == 7) {
        return assets.image`level nabo 07`
    } else if (lv == 8) {
        return assets.image`level nabo 08`
    } else if (lv == 9) {
        return assets.image`level nabo 09`
    } else if (lv == 10) {
        return assets.image`level nabo 10`
    } else if (lv == 11) {
        return assets.image`level nabo 11`
    } else if (lv == 12) {
        return assets.image`level nabo 12`
    } else if (lv == 13) {
        return assets.image`level nabo 13`
    } else if (lv == 14) {
        return assets.image`level nabo 14`
    } else if (lv == 15) {
        return assets.image`level nabo 15`
    } else if (lv == 16) {
        return assets.image`level nabo 16`
    } else if (lv == 17) {
        return assets.image`level nabo 17`
    } else if (lv == 18) {
        return assets.image`level nabo 18`
    } else if (lv == 19) {
        return assets.image`level nabo 19`
    } else if (lv == 20) {
        return assets.image`level nabo 20`
    } else if (lv == 21) {
        return assets.image`level nabo 21`
    } else if (lv == 22) {
        return assets.image`level nabo 22`
    } else if (lv == 23) {
        return assets.image`level nabo 23`
    } else if (lv == 24) {
        return assets.image`level nabo 24`
    } else if (lv == 25) {
        return assets.image`level nabo 25`
    } else if (lv == 26) {
        return assets.image`level nabo 26`
    } else if (lv == 27) {
        return assets.image`level nabo 27`
    } else if (lv == 28) {
        return assets.image`level nabo 28`
    } else if (lv == 29) {
        return assets.image`level nabo 29`
    } else if (lv == 30) {
        return assets.image`level nabo 30`
    } else if (lv == 31) {
        return assets.image`level nabo 31`
    } else if (lv == 32) {
        return assets.image`level nabo 32`
    } else if (lv == 33) {
        return assets.image`level nabo 33`
    } else if (lv == 34) {
        return assets.image`level nabo 34`
    } else if (lv == 35) {
        return assets.image`level nabo 35`
    } else if (lv == 36) {
        return assets.image`level nabo 36`
    } else if (lv == 37) {
        return assets.image`level nabo 37`
    } else if (lv == 38) {
        return assets.image`level nabo 38`
    } else if (lv == 39) {
        return assets.image`level nabo 39`
    } else if (lv == 40) {
        return assets.image`level nabo 40`
    }
    return assets.image`level nabo 01`
}
function get_level_asset_tutorial(lv: number) {
    if (lv == 1) {
        return assets.image`level easy 01`
    } else if (lv == 2) {
        return assets.image`level easy 02`
    } else if (lv == 3) {
        return assets.image`level easy 03`
    } else if (lv == 4) {
        return assets.image`level easy 04`
    } else if (lv == 5) {
        return assets.image`level easy 05`
    } else if (lv == 6) {
        return assets.image`level easy 06`
    } else if (lv == 7) {
        return assets.image`level easy 07`
    } else if (lv == 8) {
        return assets.image`level easy 08`
    } else if (lv == 9) {
        return assets.image`level easy 10`
    } else if (lv == 10) {
        return assets.image`level easy 11`
    }
    return assets.image`level easy 01`
}
function target_tile(x: number, y: number) {
    for (let t of scene.getTilesByType(3)) {
        if (x == t.x) {
            if (y == t.y) {
                return 1
            }
        }
    }
    return 0
}
let box: Sprite = null
let text_introduction: TextSprite = null
let text_frame: TextSprite = null
let undo_step: number[] = []
let record: number[] = []
let str_score_action = ""
let str_record = ""
let ban: Sprite = null
let thumbnail: Image = null
let list_skin_sprites: Image[] = []
let level_skin = 0
let text_moves: TextSprite = null
let t: TextSprite = null
let state_selection = 0
let text_best: TextSprite = null
let minimap: Sprite = null
let text_footer: TextSprite = null
let menu_items: TextSprite[] = []
let text_title: TextSprite = null
let mySprite2: Sprite = null
let select_levelset = 0
let select_level = 0
let menu_selection = 0
let button_lag = 0
let state_level = 0
let count_pushes = 0
let count_moves = 0
let undo: number[][] = []
let pressed_B = 0
let pressed_A = 0
let pressed_right = 0
let pressed_left = 0
let pressed_down = 0
let pressed_up = 0
let level = 0
let levelset = 0
let list_groupsize: number[] = []
let list_levelsets: string[] = []
introduce_game()
list_levelsets = [
    "Tutorial",
    "Microban",
    "Blocks+co",
    "Microcosm",
    "Cantrip",
    "Takaken",
    "Sokogen",
    "Murase",
    "Nabokosmos",
    "Petitesse"
]
list_groupsize = [
    10,
    52,
    20,
    40,
    20,
    7,
    20,
    20,
    40,
    18
]
levelset = 0
level = 1
let readSettings = blockSettings.readNumberArray("recent group")
let readSettings2 = blockSettings.readNumberArray("recent level")
if ((readSettings != undefined) && (readSettings2 != undefined)) {
    levelset = blockSettings.readNumber("recent group")
    level = blockSettings.readNumber("recent level")
}
set_up_level()
forever(function () {
    if (state_selection) {
        control_selection()
    }
    if (state_level) {
        control_level()
    }
    decay_button_lag()
})
