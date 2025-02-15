import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-[#050709] p-6">
      <Card>
        <CardContent className=" dark:bg-[#140C1C] text-center rounded-lg p-8 max-w-md w-full ">
          <div className="space-y-4">
            <h2 className="text-[#8750F7] text-4xl font-bold">404</h2>
            <p className="text-[#989BA4] text-lg">
              Sorry, the page you’re looking for doesn’t exist.
            </p>
            <p className="text-[#989BA4]">
              It seems like the URL is either incorrect or the page has been
              removed.
            </p>
            <Link href="/" className="block">
              <Button className="bg-[#8750F7] hover:bg-[#733DD6] text-white">
                <Home size={18} />
                Go Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
