import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'


const List = ({ktiba}) => {
  
    let movies=[  
        {
            image:"https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
            name:"Name film:Spider Man",
            genre:"Genre:cartoon",
            link:"Link:SPIDER-MAN 2 Full Movie Cinematic (2023) 4K ULTRA HD Action Fantasy New Clips 2023! Subscribe To Gameclips To Catch Up All The Best Clips."

            
        },
        {
            image:"https://m.media-amazon.com/images/M/MV5BNjQzMmYzMjgtZjVlMy00MGIwLWE1YzctYjViMTdhZDQ5Y2QxXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_.jpg ",
            name:"Name:fast x",
            genre:"Genre:action",
            link:"Link: Fast11 #Fastxpart2 #vindiesel #fastx This is our ' NEW FIRST TRAILER' for upcoming movie Fast X Part 2 2025 ! This is the last part of the "


        },
        {
            image:"https://m.media-amazon.com/images/I/61O9duSbT4L._AC_UF894,1000_QL80_.jpg",
            name:"Name:lusifer",
            genre:"Genre:action",
            link: "link :Just when we thought we'd seen every possible spin on the police procedural, someone went and threw the Devil himself into the mix. Lucifer "

        },
        {
            image:"https://m.media-amazon.com/images/M/MV5BYjA3NDkwNzktNjJkYi00ODNhLWFhYzQtYzk5NjU4MDM0OWZmXkEyXkFqcGc@._V1_.jpg",
            name:"Naime:COBRA CAI",
            genre:"Genre:cartoon",
            link:"link: 34 years after losing the All Valley Karate Championship, Johnny Lawrence (William Zabka) decides to reopen the Cobra Kai Dojo while his "
        },
        {
            image:"https://m.media-amazon.com/images/M/MV5BOTE4NjY2ZmQtMTlmNC00MzllLWExNmItNTE5NjE4ZjM4MGVlXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
            name:"Naime:BLOODSHOT",
            genre:"Genre:action",
            link:"link:https://youtu.be/vOUVVDWdXbo"
        },
           { image:"data:image/jpeg;base64,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",
            name:"Naime:extraction",
            genre:"genre:action",
            link:"link:https://youtu.be/L6P3nI6VnlY?si=KHvfIll_DIl2B16W"
        },
        {
            image:"https://www.crew-united.com/Media/Images/1162/1162868/1162868.entity.jpg",
            name:"Naime:titans",
            genre:"genre:cartoon",
            link:"link:https://youtu.be/dYn7MpdQ7TM"
        },
    

        { 
            image:"https://m.media-amazon.com/images/M/MV5BZjQwYjU3OTYtMWVhMi00N2Y2LWEzMDgtMzViN2U4NWI1NmI3XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_FMjpg_UX1000_.jpg",
            name:"Naime:the beekeeper",
            genre:"genre:action",
            link:"link:https://youtu.be/SzINZZ6iqxY"
        },
        { 
            image:"https://domonfilm.com/wp-content/uploads/2024/04/land-of-bad-uk-postersignature-entertainment.jpg?w=1400",
            name:"Naime:land of bad",
            genre:"genre:action",
            link:"link:https://youtu.be/ieZ4Xb_l-vI"
        },
        { 
            image:"https://static.tvtropes.org/pmwiki/pub/images/f14b02ac_922c_483a_a928_4c6975fe04d9.png",
            name:"Naime:code i 8",
            genre:"genre:action",
            link:"link:https://youtu.be/PrX1JJ5dduAlink:"
        },
        { 
            image:"https://m.media-amazon.com/images/M/MV5BMTQ2MzE2NTk0NF5BMl5BanBnXkFtZTgwOTM3NTk1MjE@._V1_.jpg",
            name:"Naime:the equalizer",
            genre:"genre:action",
            link:"link:https://youtu.be/VjctHUEmutw"
        },
        { 
            image:"https://foto.kontan.co.id/LLrenYAJd2OGYF7GlmbI55uec9s=/smart/2022/12/02/1727569879p.jpg",
            name:"Naime:transformers",
            genre:"genre:action",
            link:"link:https://youtu.be/itnqEauWQZM"
        },
        { 
            image:"https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
            name:"Naime:oppenheimer",
            genre:"genre:action",
            link:"link:https://youtu.be/itnqEauWQZM"
        },

       

        
    ]
    let tasks=useSelector(state=>state.counter.tasks)
  return (
    <div className='list'>
      {movies.filter(el=>el.name.toLocaleLowerCase().includes(ktiba.toLocaleLowerCase())).map(el=><Card el={el} />)}
      {/* {tasks.map(el=><h1 className='text'>{el.text}</h1>)} */}
    </div>
  )
}

export default List
