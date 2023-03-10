# Projeto Full Stack Patrimônio
Um projeto amostra para apresentar tecnologias e modelagem de dados

![Modelo](src/img_logos/Tecnologias.PNG)

## Desenvolvimento do Front-End:
A tecnologia utilizada pelo front-end para consumir a API foi a biblioteca React. Esta SPA, single-page application, tem em sua estrutura o JavaScript com a apresentação de dados através do HTML 5 e sua estilização pelo CSS 3. A biblioteca de componentes do Prime Faces auxíliou para apresentar as listas de dados de forma fácil é agradável. Um bucket criado pelo S3 da AWS dispõe esta aplicação. A codificação da API pode ser também acompanhada através deste link:

[<img alt="Git-Hub Project Back-End" width="100px" src="src/img_logos/Github.svg" />](http://github.com/rockgustavo/Project_full_Patrim)

### Front-End - Consumo da API com base no React, link de acesso:
```
http://rockgustavo.com.s3-website-us-east-1.amazonaws.com/
```

### Back-End - API Restful com base no Spring Boot 3.0, link de acesso:
```
http://107.21.11.22:8080/swagger-ui/index.html
```

### A regra de negócio
A necessidade de controle patrimonial de uma empresa, ou entidade privada, se faz necessário como um módulo administrativo que interage seus dados com outros módulos, como o controle de funcionários e a contabilidade. 
A entrada de um bem é feita por um código único que elencará os dados do item como sua carga patrimonial e a quem pertence este item.
Futuros relatórios ou balanços podem ser gerados com estas informações salvas em um base de dados.

### Modelo Conceitual
![Modelo](src/img_logos/Modelo_conceitual.png)

### Diagrama de Objetos
![Modelo](src/img_logos/Diagrama_objetos.PNG)

