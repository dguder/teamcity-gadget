# TeamCity garget is a Windows desktop gadget for TeamCity.

## Dowloads
The latest versions of the gadgets can be found on [http://www.teamcity-gadget.com/](http://www.teamcity-gadget.com/)

## Build

In order to build TeamCity Gadget, you need to have [Node.js/npm](https://nodejs.org/en/download/) and [git](https://git-scm.com/downloads) installed. 

Clone a copy of the main git repo by running:

```bash
git clone git://github.com/anisimovsergey/teamcity-gadget.git
```

Run the build script:
```bash
npm run build
```

The built version of TeamCity Gadget will be put in the `dist/` subdirectory.