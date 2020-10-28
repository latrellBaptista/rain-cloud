namespace SpriteKind {
    export const cloud = SpriteKind.create()
}
sprites.onDestroyed(SpriteKind.cloud, function (sprite) {
    game.over(true, effects.confetti)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let RainDrop: Sprite = null
let cloud = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 . . . . . . . . . 
    . . . 1 1 1 1 1 1 . . . . . . . 
    . . . 1 1 1 1 1 1 . . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 . . . . . . . . . 
    . . . . . 1 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 10, 0)
cloud.setKind(SpriteKind.cloud)
game.onUpdateInterval(50, function () {
    RainDrop = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 . . . . . . . . 
        . . . . . . 6 6 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, cloud, 0, 30)
    RainDrop.setFlag(SpriteFlag.Ghost, true)
    RainDrop.y = 3
    RainDrop.x = randint(1, 14)
})
