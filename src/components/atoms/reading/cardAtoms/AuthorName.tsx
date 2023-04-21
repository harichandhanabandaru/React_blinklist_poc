import useStyle from "../../../../cardStyle";
interface propsType {
  author:string;
}
function AuthorName(props:propsType) {
  const classes = useStyle();
  return (
    <>
      <p className={classes.authorName}>{props.author}
      </p>
    </>
  );
}

export default AuthorName;
