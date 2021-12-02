---
title: The Anatomy of A Three.js Scene
publish_date: 20211003
last_updated: 20211003
description: The basics of how a three.js scene works
status: draft
layout: ../../layouts/PermanentNoteLayout.astro
---

These are the core building blocks which every Three.js app is comprised of.


## The `scene`,
Houses all the 3D objects and cameras.
```js
const scene = new THREE.Scene()
```

## The 	`camera` ,
 Orientates  the scene. Provides you a mechanism view 3D objects in any angle required.
```js
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
```

## The `3D object`, 

Also known as a `mesh`. A `mesh` is comprised of some geometry and a texture.

```js
const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ map: colorTexture });

const mesh = new THREE.Mesh(geometry, material);
```

The camera and 3D objects need to be added to the `scene`.

```js
scene.add(mesh)
scene.add(camera);
```


## The `geometry`,

## The `texture`,