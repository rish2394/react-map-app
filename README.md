Technology Stack Used:
1. React for front-end
2. React Google Map
3. Bootstrap
4. Node and Express for REST API

I designed my own REST API with the same data you provided on sending POST request to http://43.252.91.54:6015/iview because axios is not working correctly with the REST API
you provided


How to make this app work?

1. Go to UI folder and run the command (npm install) and after install run command -> (npm run start)
2. Go to WebServer Folder and run the command (npm install) and then after install run command -> (node index.js)
   The server will start listening on Port 3002
   You can change the port if another process is using it
   Go to WebServer Folder and then open file index.js to change the port
3. Check your ip-> on linux - ifconfig and on Windows - ipconfig
4. Go to index.js file inside src/containers
  Change IP here
  componentDidMount() {
      /* sending request to the server here to fetch data using axios*/
      setInterval(
        () =>  axios.get('http://YOUR_IP_ADDRESS:PORT_ON_WHICH_NODE_RUNNING/api/v1/vehicle-info')
                    .then((res) => {
                         return res.data;
                    })
                    .then((data) => {
                      this.setState({vehicles: data})
                    }),
        10000
      );

Not Implemented Points:
1.Point 6 ,
2.Try point 7 but unable to find any api to do so, documentation is not well organised so I couldn't understand.
3.Point 8 map is already large enough so dont need to add this button.


-> React works on the concept of virtual DOM so the application is very much fast and efficient and can handle a lot more than 500 items.
-> If any of the item co-ordinate changes the React will re-render only the changed one not the whole list.
-> Instead of long xhr polling we can use web sockets, as it provides two way communication.
-> If there is any change in co-ordinates of the item the marker will update automatically.
