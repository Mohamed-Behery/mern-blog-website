import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  min-height: calc(100vh - 195px);
`;
const PageTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
  /* border: 1px solid #000; */
  * {
    background: ${({ theme }) => theme.neutral};
    color: ${({ theme }) => theme.text};
    padding: 8px 16px;
    border: 1px solid ${({ theme }) => theme.border};
    outline: none;
    border-radius: 24px;
  }
  *:focus {
    border-color: ${({ theme }) => theme.text};
  }

  @media screen and (max-width: 767px) {
    & {
      padding: 8px;
    }
  }
`;
// const Image = styled.img``;
const PostTitle = styled.input``;
const Category = styled.select``;
const Option = styled.option``;
const Content = styled.textarea`
  min-height: 500px;
  max-height: 500px;
  min-width: 100%;
  max-width: 100%;
`;

const Write = () => {
  return (
    <Container>
      <PageTitle>Write a new post</PageTitle>
      <Wrapper>
        {/* <Image src="" /> */}
        <PostTitle type="text" placeholder="Post Title" />
        <Category>
          <Option value="">Laptop</Option>
          <Option value="">Mobile</Option>
          <Option value="">Tablet</Option>
        </Category>
        <Content placeholder="Post Content" />
      </Wrapper>
    </Container>
  );
};

export default Write;
