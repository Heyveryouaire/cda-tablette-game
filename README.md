# Start app
```sh
    expo start
```

## API 
Add path
```sh
    # /api/index.js
    # Add function in API object like example
```

Call method
```js
    // /screens/example
    try{
        const results = await API.example()
        // ...
    }catch(err){
        // ...
    }
```

## SCREENS
```js
    // Create new screens in screens folder, and import it in navigators/index, like : 
    <Stack.Screen name="example" component={ExampleScreen} options={{headerShown: false}} />
```