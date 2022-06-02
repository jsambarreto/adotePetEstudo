import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title'
import List from '../ui/components/List/List'


const Home: NextPage = () => {
  return (
    <div >
      <Title title="" 
          subtitle={<span>
            Com um pequeno valor mensal, você <br/>
            pode <strong>adotar um pet virtualmente</strong>
          </span>}/>
          <List 
            pets={
              [
                {
                  id: 1,
                  name: 'Bidu',
                  history: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi non nisi, expedita iusto quae sapiente quidem, nobis voluptate eaque aut cum quis, error neque dignissimos obcaecati molestiae animi deleniti tempore?',
                  photo: 'http://image.cachorrogato.com.br/textimages/cachorrinho-ideal'  
                },
                {
                  id: 1,
                  name: 'Hero',
                  history: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi non nisi, expedita iusto quae sapiente quidem, nobis voluptate eaque aut cum quis, error neque dignissimos obcaecati molestiae animi deleniti tempore?',
                  photo: 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png'  
                }
              ]
            }
            />
    </div>
  )
}

export default Home
