import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { SendEmail } from "./SendEmail";



const ContactForm = () => {
  return (
    <Card className="w-full max-w-2xl p-6 rounded-lg shadow-md">
      <form
        action={async (FormData) => {
          "use server";
          await SendEmail(FormData);
        }}
        className="w-full"
      >
        <CardHeader>
          <CardTitle className="text-center icon_underline text-2xl">
            Send me a mail.
          </CardTitle>
          <CardDescription className="text-center">
            Once the form is submitted, you will be redirected to the home page.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="SenderEmail"
              required
              placeholder="Enter your email"
              className="w-full"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              placeholder="Your message here..."
              name="message"
              required
              className="resize-none flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button type="submit" className="w-full max-w-sm">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
