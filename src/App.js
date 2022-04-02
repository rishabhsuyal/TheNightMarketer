import React,{useState} from 'react'
import Block from './Component/Block/Block';
import InfiniteScroll from "react-infinite-scroll-component";
import './App.css';
import AddBlock from './Component/AddBlock/AddBlock';


function App() {

  const [curr,setCurr]=useState(10);
 

  const [obj,setobj]=useState([
    {
      id:1,
      name:'Rishabh',
      hobbies:'Dance'
    },
    {
      id:2,
      name:'Ishu',
      hobbies:'Dance'
    },
    {
      id:3,
      name:'Shubh',
      hobbies:'Dance'
    },
    {
      id:4,
      name:'Harsh',
      hobbies:'Dance'
    },
    {
      id:5,
      name:'Rishu',
      hobbies:'Dance'

    },
    {
      id:6,
      name:'Iran',
      hobbies:'Dance'
    },
    {
      id:7,
      name:'Shivam',
      hobbies:'Dance'
    },
    {
      id:8,
      name:'Hira',
      hobbies:'Dance'
    },
    {
      id:9,
      name:'Rasu',
      hobbies:'Dance'

    },
    {
      id:10,
      name:'Ishita',
      hobbies:'Dance'
    },
    {
      id:11,
      name:'Shiva',
      hobbies:'Dance'
    },
    {
      id:12,
      name:'Hari',
      hobbies:'Dance'
    },
    {
      id:13,
      name:'Riya',
      hobbies:'Dance'

    },
    {
      id:14,
      name:'Iiya',
      hobbies:'Dance'
    },
    {
      id:15,
      name:'Zeal',
      hobbies:'Dance'
    },
    {
      id:16,
      name:'Hiya',
      hobbies:'Dance'
    },
    {
      id:17,
      name:'Rahul',
      hobbies:'Dance'
    },
    {
      id:27,
      name:'Ikka',
      hobbies:'Dance'
    },
    {
      id:37,
      name:'Sharad',
      hobbies:'Dance'
    },
    {
      id:57,
      name:'Riyal',
      hobbies:'Dance'

    },
    {
      id:67,
      name:'Ishika',
      hobbies:'Dance'
    },
    {
      id:77,
      name:'Sharule',
      hobbies:'Dance'
    },
    {
      id:87,
      name:'Hriya',
      hobbies:'Dance'
    },
    {
      id:97,
      name:'Riya',
      hobbies:'Dance'

    },
    {
      id:107,
      name:'Isha',
      hobbies:'Dance'
    },
    {
      id:117,
      name:'Sharule',
      hobbies:'Dance'
    },
    {
      id:127,
      name:'Hakul',
      hobbies:'Dance'
    },
    {
      id:137,
      name:'Rashmi',
      hobbies:'Dance'

    },
    {
      id:147,
      name:'Ipl',
      hobbies:'Dance'
    },
    {
      id:157,
      name:'Saloni',
      hobbies:'Dance'
    },
    {
      id:167,
      name:'Hahah',
      hobbies:'Dance'
    }
  ]);

  const [state,setState] =useState ({
    items: obj.slice(0,10),
    hasMore:true
  });

  function handleDelete(id){
    console.log(id);
    setobj(obj.filter(single=> single.id!==id ));

    var filtered=state.items.filter(single=> single.id!==id );
    setState({ 
      items:filtered,
      hasMore:true 
    });
  }

 
    function fetchMoreData(){
      setCurr(curr+10);
      if (state.items.length >= obj.length || curr>=obj.length) {
        setState({ 
          ...state,
          hasMore: false 
        });
        return;
      }
    setTimeout(() => {
      setState({
        items: state.items.concat( obj.slice(curr, curr+10<obj.length?curr+10:obj.length) ),
        hasMore:true
      });
    }, 500);
  };

  function add_block(new_obj_passed){
    
    console.log(obj);

    setobj([
      new_obj_passed,
      ...obj
      
    ])

    setState({
      items: obj.slice(0,10),
      hasMore:true
    });

  }
  
  return (
    <div className='container1'>
    
    <AddBlock add_block={add_block}/>
    <InfiniteScroll
          dataLength={state.items.length}
          next={fetchMoreData}
          hasMore={state.hasMore}
          loader={<h4>...Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
      >
    {
        state.items.map( (single)=>
        <div>
        
        <Block name={single.name} hobbies={single.hobbies} id={single.id} delFunction={handleDelete} />
        </div>
       )
    }
    
    </InfiniteScroll>
    </div>


  )
}

export default App;