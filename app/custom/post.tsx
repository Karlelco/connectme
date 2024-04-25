import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NewPost } from "../server/actions/route";


export default function FormItem() {
  return (
    <>
      NewPost
      <form>
        <div>
          <Label htmlFor="title"> Title</Label>
          <Input id="title" name="title" type="text" />
        </div>
        <div>
          <Label htmlFor="content">Content</Label>
          <Input id="content" name="content" type="text" />
        </div>
        <div>
          <Label htmlFor="author">Author</Label>
          <Input id="author" name="author" type="text" />
        </div>
        <Button formAction={NewPost}>Post</Button>
      </form>
    </>
  );
}
