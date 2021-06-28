# flipper-plugin-redux-debugger-ui
 To test flipper-plugin-redux-debugger  
 https://github.com/jk-gan/flipper-plugin-redux-debugger  


## dependencies  

```
"react-native": "0.64.2",
"react-native-flipper": "^0.95.0",
"react-redux": "^7.2.4",
"redux": "^4.1.0",
"redux-flipper": "^1.4.2"
```

## Quick Start   
```
1. yarn 
2. open one android emulator
2. yarn android
3. yarn start
```

## dev(if any dependency change)  
```
yarn anndroid
yarn start --reset-cache
```
## Contrubution learning  

### How to get started?  
https://www.youtube.com/watch?v=GbqSvJs-6W4  
### basic  
https://fbflipper.com/docs/extending/create-plugin   
### Publish  
https://fbflipper.com/docs/extending/public-releases  


### debugging  
https://fbflipper.com/docs/extending/plugin-distribution  
https://fbflipper.com/docs/extending/debugging 

### Open source work flow  
```
1. fork 
2. try to change my forked repo based on issue description and fix bug
3. commit to my forked repo
4. yarn prepack
5. copy dist, index.tsx, package.json to C:\Users\user\.flipper\installed-plugins\flipper-plugin-redux-debugger\1.2.2
6. restart flipper and toggle dev tool
7. check the bug fixed.
8. pull request
```

```
1. install "Redux Debugger" from "View" -> "Manage Plugin" -> "Search Flipper Plugins..."
2. cd C:\Users\user\.flipper\installed-plugins\flipper-plugin-redux-debugger\1.2.2
3. swap "dist" folder, index.tsx, package.json with your updated one.
4. Restart Flipper 
5. "View" -> "Toggle Developer Tools"  
```

### To Do List  

- [ ] [Cannot read property 'type' of undefined. #30](https://github.com/jk-gan/flipper-plugin-redux-debugger/issues/30)



## Acknowledge  
This is App is for testing https://github.com/jk-gan/flipper-plugin-redux-debugger