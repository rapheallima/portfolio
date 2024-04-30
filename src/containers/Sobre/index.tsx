import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
      consectetur in totam veniam suscipit aut obcaecati sint molestias, itaque
      similique tenetur! Voluptatibus illo qui quibusdam saepe similique, quod
      labore iusto!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=rapheallima&theme=radical" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs?username=rapheallima&theme=radical&layout=compact&langs_count=8&card_width=313" />
    </GithubSecao>
  </section>
)

export default Sobre
