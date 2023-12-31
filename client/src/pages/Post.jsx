import styled from "styled-components";
import Recommendations from "../Components/Recommendations";

const Container = styled.div``;
const PostDetails = styled.div``;
const Image = styled.img``;
const Title = styled.h1`
  color: inherit;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
`;
const Date = styled.span``;
const Author = styled.span``;
const Category = styled.span``;
const Update = styled.span``;
const Delete = styled.span``;
const Content = styled.p``;
const Hr = styled.hr``;

const Post = () => {
  return (
    <Container>
      <PostDetails>
        <Image src="" />
        <Title>Title</Title>
        <Date>1/1/2001</Date>
        <Author>Mohamed</Author>
        <Category>Tech</Category>
        <Update>Update</Update>
        <Delete>Delete</Delete>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          expedita necessitatibus aliquam beatae voluptatem amet delectus magni
          dolores quam officia? Rerum fugiat Lorem ipsum dolor sit amet
          consectetur adipisicing elit. In quos doloremque veritatis recusandae
          necessitatibus aperiam commodi ea vel ut officiis inventore eaque cum,
          incidunt atque doloribus ipsam, nostrum culpa quia fuga accusantium,
          ratione mollitia? Eos corrupti voluptates nam est maiores error quidem
          illum provident exercitationem nobis dolor odio tenetur veniam
          inventore quis, natus esse laboriosam sit culpa tempora. Ducimus harum
          corporis sapiente. Consequatur vitae repellat placeat sapiente, esse
          cum dicta quasi corrupti culpa pariatur deleniti rerum eveniet iure
          iste laborum molestias dolores accusamus. Praesentium, amet? Iusto
          voluptatum ab, dicta eius reprehenderit rerum consequuntur excepturi
          molestiae, expedita nisi vero? Iste necessitatibus consequuntur eum
          nulla deserunt repellat, consequatur sunt? Similique enim, harum
          maxime delectus cum blanditiis vitae qui molestiae hic quaerat, illo
          praesentium totam. Consequatur possimus cumque exercitationem. Est
          repellendus quod iusto architecto explicabo vero culpa fuga, quo
          provident nemo neque vel molestiae aspernatur corrupti voluptatibus
          asperiores consequatur nam ea tempora laboriosam distinctio error.
          Labore facere quo aut ex, assumenda ullam ut exercitationem omnis sit
          eveniet alias iste in illum sed id cumque quos, nobis laborum vero
          deserunt consectetur animi suscipit similique quidem? Perferendis quod
          assumenda doloremque nulla debitis voluptatibus corporis ea placeat
          doloribus mollitia quam minus, expedita omnis suscipit alias fuga
          consectetur ratione non tempora voluptates quis aliquid. Qui vero
          autem culpa inventore at vitae esse optio, iusto recusandae eos dolor.
          Reprehenderit nihil commodi modi error neque voluptas nulla voluptates
          earum doloribus magnam alias autem fugit tenetur ipsam blanditiis
          necessitatibus expedita dolorem aut explicabo, quibusdam a eius
          molestiae optio voluptatibus? Molestiae aut fugiat animi quaerat quis,
          natus veniam rerum earum hic cum id deleniti, eligendi voluptatum
          labore eveniet optio quisquam aspernatur voluptas facilis! Dicta
          reprehenderit rerum praesentium at nam itaque blanditiis sint magnam.
          Quibusdam aperiam non molestias iste qui unde atque quaerat eaque,
          quam perspiciatis consequuntur voluptatibus veritatis velit temporibus
          necessitatibus. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Laudantium quisquam reiciendis minus veritatis quibusdam totam,
          sit pariatur odit dolorum corrupti numquam quas ipsa? Culpa maiores
          odio eaque eius. Quos perferendis provident explicabo. Quia optio
          corrupti vel in voluptatum accusantium non asperiores architecto.
          Molestiae et praesentium rerum a rem temporibus corrupti repudiandae
          similique, iure sed facere maiores veritatis ipsa itaque tempora
          tenetur! Ex consequatur repellat consectetur molestiae possimus
          excepturi voluptate eaque placeat tempora hic doloribus magnam soluta
          delectus fugiat nemo optio quis repudiandae, nobis ducimus, suscipit
          itaque, assumenda accusantium cumque! Eos aliquid ab illum reiciendis
          beatae nostrum. Voluptate esse omnis maxime.
        </Content>
      </PostDetails>
      <Hr />
      <Recommendations />
    </Container>
  );
};

export default Post;
