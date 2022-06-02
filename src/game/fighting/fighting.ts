import EnemyPlane from '../EnemyPlane/EnemyPlane'
import { hitTestObject } from '../hitTestObject/hitTestObject'
import { Plane } from '../Plane/Plane'

export function fighting(plane: Plane, enemyPlanes: EnemyPlane[]) {
  plane.bullets.forEach((bullet, bulletIndex) => {
    enemyPlanes.forEach((enemy, enemyIndex) => {
      if (hitTestObject(bullet, enemy)) {
        plane.bullets.splice(bulletIndex, 1)
        enemyPlanes.splice(enemyIndex, 1)
      }
    })
  })
}

export function fightingtwo(plane: Plane, enemyPlanes: EnemyPlane[]) {
  enemyPlanes.forEach((enemy, enemyIndex) => {
    if (hitTestObject(plane, enemy)) {
      alert('你扑街了')
      enemyPlanes.splice(enemyIndex, 1)
    }
  })
}
