import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <section className={styles.primeira}>
    <img className="background" src="background.svg" />
    <div className="">
      <h2>
        Douglas Santos
      </h2>
      <span>
        <h1 >
          Toma Vergonha e Aprende !!
        </h1>
        <p>
          Descubra como ter lucros na bolsa de valores e
          conquiste a sua independência financeira
        </p>
      </span>
      <a className={styles.ctaButton} href="">
        quero me inscrever
      </a>
      {/* <a href="#sobre">
        <img src="/src/icons/angles-down-solid.svg" alt="background" />
      </a> */}
    </div>
  </section>

  <section id={styles.introduction}>
    <div  className={styles.wrapper}>
      <div className="first">
        <div>
          <strong>O que é o mercado financeiro?</strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin urna sed ex bibendum imperdiet. Mauris aliquet iaculis volutpat. Proin porttitor augue vel volutpat fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin urna sed ex bibendum imperdiet. Mauris aliquet iaculis volutpat. Proin porttitor augue vel volutpat fermentum</p>
        </div>
        <img src="/src/bg.png" />
      </div>

      <div>
        <div>
          <strong>Como obter lucros no mercado financeiro?</strong>
          <p>Existem várias formas de obter lucros na bolsa de valores, mas nosso foco aqui é o Day Trade. O day trade é a categoria que se encontra as operações iniciadas e finalizadas no mesmo dia dentro da bolsa de valores, sendo póssível ganhar dinheiro tanto na valorização quanto na desvalorização de uma ação.</p>
        </div>
        <img src="/src/bg.png" />
      </div>

      <div>
        <div>
          <strong>A estratégia PONTO-XEQUE</strong>
          <p>Com o objetivo de ajudar pessoas a conseguirem a conquistar a independencia financeira trabalhando de casa, poucas horas por dia e sem patrão, eu desenvolvi a estratégia PONTO-XEQUE, a qual será ensinada nesse curso</p>
        </div>
        <img src="/src/bg.png" />
      </div>
    </div>
  </section>


  <section id={styles.curse}>
    <div className={styles.wrapper}>
      <span>
        
        <div>
          <h3 className="">
            Toma vergonha e aprende!
          </h3>
          <h1 className="">
            O que você vai aprender no curso?
          </h1>
          <p className="">
            Dentro do curso você vai aprender do teorico básico sobre o mercado financeiro que te memitirá ter consicencia e confiaça para realizar operações na bolsa de valores até operações na prática, onde você vai aprender a identificar as tendências 
          </p>
          <p className="">
            Você vai aprender toda a configuração necessária para
          </p>
        </div>
        
        
        <div className={styles.cards}>
          <div className={styles.card}>
            <p className="">
              Módulo 1
            </p>
            <span>
              <p className={styles.name}>Conhecimentos básicos</p>
            </span>
          </div>
  
          <div className={styles.card}>
            <p className="">
              Módulo 2
            </p>
            <span>
              <p className={styles.name}>Gerenciamento de risco</p>
            </span>
          </div>
  
          <div className={styles.card}>
            <p className="">
              Módulo 3
            </p>
            <span>
              <p className={styles.name}>Manuseio da plataforma</p>
            </span>
          </div>

          <div className={styles.card}>
            <p className="">
              Módulo 4
            </p>
            <span>
              <p className={styles.name}>Estratégia PONTO-XEQUE</p>
            </span>
          </div>

          <div className={styles.card}>
            <p className="">
              Módulo 5
            </p>
            <span>
              <p className={styles.name}>Estratégia PONTO-XEQUE: Dólar</p>
            </span>
          </div>

          <div className={styles.card}>
            <p className="">
              Módulo 6
            </p>
            <span>
              <p className={styles.name}>Estratégia PONTO-XEQUE: Índice</p>
            </span>
          </div>

          <div className={styles.card}>
            <p className="">
              Módulo Bônus
            </p>
            <span>
              <p className={styles.name}>Replays de operações</p>
            </span>
          </div>
        </div>
        
      </span>
    </div>
  </section>


  <section id={styles.testimony}>
    <div className={styles.wrapper}>
      <span>
        <h1 className="">
          Depoimentos dos meus alunos
        </h1>
        
        <div className={styles.cards}>
          <div className={styles.card}>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin urna sed ex bibendum imperdiet.
            </p>
            <span>
              <img src="/src/icons/user.svg" />
              <p className={styles.name}>John Doe</p>
            </span>
          </div>
  
          <div className={styles.card}>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin urna sed ex bibendum imperdiet.
            </p>
            <span>
              <img src="/src/icons/user.svg" />
              <p className={styles.name}>John Doe</p>
            </span>
          </div>
  
          <div className={styles.card}>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin urna sed ex bibendum imperdiet.
            </p>
            <span>
              <img src="/src/icons/user.svg" />
              <p className={styles.name}>John Doe</p>
            </span>
          </div>
        </div>
      </span>
      <a className={styles.ctaButton} href="">
        Quero me tornar aluno
      </a>
    </div>
  </section>

  <section id={styles.sobre}>
    <div className={styles.wrapper}>
      <span>
        <h1>
          Quem é Douglas Santos?
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin urna sed ex bibendum imperdiet. Mauris aliquet iaculis volutpat. Proin porttitor augue vel volutpat fermentum.
        </p>
        <p>
          Proin enim tortor, dictum vitae metus quis, consequat interdum odio. Aliquam faucibus ultrices nisi nec molestie. Nullam rhoncus ligula dapibus, vulputate velit at, malesuada nisl. Nam id felis gravida, vulputate mauris fringilla, fermentum purus.
        </p>
        <span className={styles.bts}>
          <button><img width="18" src="/src/icons/instagram.svg"/>Instagram</button>
          <button> <img width="12" src="/src/icons/facebook.svg"/>Facebook</button>
          <button><img width="22" src="/src/icons/youtube.svg"/>Youtube</button>
        </span>
      </span>
      <img src="/src/doguinha.png"/>
    </div>
  </section>


  <section id={styles.warranty}>
    <div className={styles.wrapper}>
      <div>
        <img src="/src/icons/warranty.svg" />
        <div>
          <strong>Risco zero</strong>
          <p>Ainda está na dúvida ou não tem certeza se essse é o caminho que você quer seguir?</p>
          <p>Não se preocupe, eu assumo todo o risco, se dentro de 7 dias você acabar descobrindo que o mercado financeiro realmente não é para você ou não quiser continuar o curso por qualquer outro motivo eu devolvo 100% do seu dinheiro sem burocracia alguma.</p>
        </div>
      </div>
    </div>
  </section>




  <section id={styles.price}>
    <div className={styles.wrapper}>
      <span>
        <h1 className="">
          O que você vai receber?
        </h1>
        
        <div className={styles.list}>
          <div className={styles.card}>
            <span>
              <img src="/src/icons/check.svg" />
              <p className={styles.name}>Lorem ipsum dolor sit amet, consectetur</p>
            </span>
            <span>
              <img src="/src/icons/check.svg" />
              <p className={styles.name}>Estratégia PRONTO-XEQUE</p>
            </span>
            <span>
              <img src="/src/icons/check.svg" />
              <p className={styles.name}>Conhecimento teórico sobre o mercado</p>
            </span>
            <span>
              <img src="/src/icons/check.svg" />
              <p className={styles.name}>Suporte via Whatsapp</p>
            </span>
            <span>
              <img src="/src/icons/check.svg" />
              <p className={styles.name}>7 dias de garantia</p>
            </span>
            <span>
              <img src="/src/icons/check.svg" />
              <p className={styles.name}>Conhecimento sobre os sinais do mercado</p>
            </span>
            <span>
              <img src="/src/icons/check.svg" />
              <p className={styles.name}>Como usar um Homebroker</p>
            </span>
            <span>
              <img src="/src/icons/check.svg" />
              <p className={styles.name}>Conhecimento sobre gerenciamento de risco</p>
            </span>
          </div>
  
          <div className={styles.left}>
            <div>
              <span>Garanta a sua vaga por apenas</span>
              <strong>12x de R$49,20</strong>
              <p>ou R$493,00 à vista</p>
            </div>
            
            <div>
              <a className={styles.ctaButton} href="">
                Garantir minha vaga
              </a>
            </div>
          </div>
        </div>
      </span>
    </div>
  </section>

  <section>
    <div className={styles.wrapper}>
      <p>
        &nbsp;Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultado.
      </p>
      <a href="#">
        Desenvolvido por Madson Silva
      </a>
    </div>
  </section>
    </>
  )
}

export default Home
