---
title: threejs-journey
publish_date: 20210928
last_updated: 20210930
description: Notes from threejs-journey.xyz
layout: ../../layouts/LiteratureNoteLayout.astro
---

# Notes from threejs-journey.xyz

## Basics

In three.js there are there basic core building blocks

A scene which will house all the 3D objects and cameras.

```js
const scene = new THREE.Scene();
```

A camera which displays the 3D objects in any sort of angle required.

```js
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
```

A 3D object, also known as a `mesh`. A `mesh` is comprised of some geometry and a texture.

```js
const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ map: colorTexture });

const mesh = new THREE.Mesh(geometry, material);
```

The camera and 3D objects need to be added to the `scene`.

```js
scene.add(mesh);
scene.add(camera);
```

Things get a lot more interesting when we bring controls and animations into the mix. But this is the core of how three.js works.

### Cameras

- [20210828](../fleeting-notes/20210828.md)
- [20210830](../fleeting-notes/20210830.md)
- [20210905](../fleeting-notes/20210905.md)
- [20210909](../fleeting-notes/20210909.md)

### Textures / Meshes

- [20210912](../fleeting-notes/20210912.md)
- [20210930](../fleeting-notes/20210930.md)

### Animations

- [20210829](../fleeting-notes/20210829.md)

### Text

- [20211002](../fleeting-notes/20211002.md)

### Lighting & Shadows

- [20211010](../fleeting-notes/20211010.md)
- [20211012](../fleeting-notes/20211012.md)

### Raycasting

- [20211108](../fleeting-notes/20211108.md)

### Importing 3D models

- [20211118](../fleeting-notes/20211118.md)

### Debugging

- [20210911](../fleeting-notes/20210911.md)

## References

- https://threejs-journey.xyz/
