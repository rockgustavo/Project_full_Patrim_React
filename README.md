# Projeto Full Stack Patrimônio
Um projeto amostra para apresentar tecnologias e modelagem de dados

![Modelo](src/main/resources/img/Tecnologias.PNG)

### Front-End - Consumo da API com base no React, link de acesso:
[<img alt="Front-End" width="300px" src="src/main/resources/img/Controle_patrimonial.PNG" />](http://rockgustavo.com.s3-website-us-east-1.amazonaws.com/)

### Back-End - API Restful com base no Spring Boot 3.0, link de acesso:
[<img alt="Back-End" width="200px" src="src/main/resources/img/Swagger.PNG" />](http://107.21.11.22:8080/swagger-ui/index.html)

### A regra de negócio
A necessidade de controle patrimonial de uma empresa, ou entidade privada, se faz necessário como um módulo administrativo que interage seus dados com outros módulos, como o controle de funcionários e a contabilidade. 
A entrada de um bem é feita por um código único que elencará os dados do item como sua carga patrimonial e a quem pertence este item.
Futuros relatórios ou balanços podem ser gerados com estas informações salvas em um base de dados.

### Modelo Concentual
![Modelo](src/main/resources/img/Modelo_conceitual.png)

### Diagrama de Objetos
![Modelo](src/main/resources/img/Diagrama_objetos.PNG)

## Desenvolvimento do Back-End:
A tecnologia utilizada pelo back-end tem sua codificação em Java com o framework Spring Boot. Os padrões Rest e a especifição do JPA, Java Persistence API através da tecnologia ORM do Hibernate, foram aplicadas como estrutura do código fonte. Através dos serviços da AWS, Amazon Web Services, o banco de dados Relacional MySQL e um servidor Linux Ubuntu também instanciado em nuvem compõe e infraestrutura da aplicação.
Um bucket ainda na AWS dispõe o Front-end que consome esta API através da biblioteca React. Esta codificação pode ser também acompanhada através deste link:

[<img alt="Git-Hub Project Front-End" width="100px" src="src/main/resources/img/img_logos/Github.svg" />](https://github.com/rockgustavo/Project_full_Patrim_React)

