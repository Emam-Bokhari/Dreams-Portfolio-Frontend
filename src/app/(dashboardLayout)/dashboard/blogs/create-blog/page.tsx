/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import DashboardSectionTitle from "@/components/dashboard/shared/DashboardSectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Pencil } from "lucide-react";
import { Fragment, useState } from "react";
import { toast } from "sonner";

export default function CreateBlogPage() {
  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    category: "",
    introduction: "",
    mainContent: "",
    authorName: "",
    tags: [] as string[],
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    if (name === "tags") {
      // Split the tags string by commas and trim any extra spaces
      const tagsArray = value.split(",").map((tag) => tag.trim());
      setFormData({
        ...formData,
        [name]: tagsArray,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(formData, "Form data");

    try {
      const response = await fetch("http://localhost:5000/api/v1/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        toast.error("Failed to create blog");
        return;
      }

      const data = await response.json();
      console.log(data);

      if (data?.success) {
        toast.success("Blog Created successfully", {
          duration: 2000,
        });
      } else {
        toast.error("Failed to create blog");
      }

      // reset field
      setFormData({
        title: "",
        thumbnail: "",
        category: "",
        introduction: "",
        mainContent: "",
        authorName: "",
        tags: [] as string[],
      });

      // reset field
    } catch (err: any) {
      // console.log(err);
      if (err) {
        toast.error("Something went wrong!");
      }
    }
  }

  return (
    <Fragment>
      <div className="border-2 border-red-500">
        {/* section title */}
        <DashboardSectionTitle title="Create Blog" />
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="space-y-4">
            <div className="flex gap-5">
              {/* title */}
              <div className="space-y-2 flex-1">
                <Label htmlFor="title">
                  Title:<span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  required
                  placeholder="Enter blog title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              {/* thumbnail */}
              <div className="space-y-2 flex-1">
                <Label htmlFor="thumbnail">
                  Thumbnail Image Url:
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  required
                  placeholder="Enter thumbnail image url"
                  name="thumbnail"
                  value={formData.thumbnail}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex gap-5">
              {/* category */}
              <div className="space-y-2 flex-1">
                <Label htmlFor="category">
                  Category:<span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  required
                  placeholder="Enter blog category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>

              {/* author name */}
              <div className="space-y-2 flex-1">
                <Label htmlFor="authorName">
                  Author Name:
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  required
                  placeholder="Enter author name"
                  name="authorName"
                  value={formData.authorName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* introduction */}
            <div className="space-y-2 flex-1">
              <Label htmlFor="introduction">
                Introduction:<span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                required
                placeholder="Enter blog introduction"
                name="introduction"
                value={formData.introduction}
                onChange={handleChange}
              />
            </div>

            {/* mainContent */}
            <div className="space-y-2 flex-1">
              <Label htmlFor="mainContent">
                Main Content:
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Textarea
                required
                placeholder="Enter blog main content"
                name="mainContent"
                value={formData.mainContent}
                onChange={handleChange}
                className="min-h-36"
              />
            </div>

            {/* tags */}
            <div className="space-y-2">
              <Label htmlFor="tags">Tags:</Label>
              <Textarea
                placeholder="Enter tags, separated by commas (e.g., React, Technology, Anguler)"
                name="tags"
                value={formData?.tags?.join(",")}
                onChange={handleChange}
                className="min-h-20"
                required
              />
            </div>

            {/* submit button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-[#8750F7] text-white hover:bg-[#733DD6] "
              >
                <Pencil size={18} />
                Create Blog
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
