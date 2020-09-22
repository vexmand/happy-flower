let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . 1 1 1 . . 1 1 . . . . 
    . . . . . 1 1 1 . 1 1 1 . . . . 
    . . 1 1 1 . 1 1 . 1 1 . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . 1 1 1 . 
    . . . 1 1 1 5 5 5 5 1 1 1 1 1 . 
    . . . . . 1 5 5 5 5 1 1 1 1 . . 
    . . . . 1 1 5 5 5 5 1 1 . . . . 
    . . . 1 1 1 1 7 7 1 1 . . . . . 
    . . . 1 1 1 . 7 7 . 1 1 . . 1 . 
    . . . . . . . 7 7 . 1 1 1 . . . 
    . . . . . . . 7 7 7 . 1 1 . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 4 b 
        b d d c d 5 5 b 5 4 4 4 4 4 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
