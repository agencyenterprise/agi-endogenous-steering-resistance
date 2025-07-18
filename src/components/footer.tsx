"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { SiInstagram, SiX } from "@icons-pack/react-simple-icons"
import { Brain, Copyright, Globe, SendHorizonal } from "lucide-react"
import Link from "next/link"
import { Fragment } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const SOCIAL_LINKS = [
  {
    icon: Globe,
    href: "https://ae.studio/",
    label: "AE Studio Website",
  },
  {
    icon: Brain,
    href: "https://ai-alignment.ae.studio/",
    label: "AE Studio AI Alignment Website",
  },
  {
    icon: SiX,
    href: "https://x.com/AEStudioLA",
    label: "AE Studio on X",
  },
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/aestudiola/",
    label: "AE Studio on Instagram",
  },
]

const FormSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address.",
  }),
})

type FormSchemaType = z.infer<typeof FormSchema>

export function Footer() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: FormSchemaType) {
    // TODO: Implement newsletter subscription
    console.log(data)
  }

  return (
    <footer className="flex justify-center items-center bg-radial from-blue-900 from-10% to-blue-950">
      <Section
        id="footer"
        className="text-primary-foreground py-12 gap-32 !w-auto !max-w-5xl bg-radial-[at_50%_-75%] from-purple-400/50 via-transparent via-70% to-transparent"
      >
        <div className="grid md:grid-cols-2 gap-32">
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-bold leading-12">AE.STUDIO</div>
            <div>
              Solving AI alignment is a science R&D problem. We don&apos;t know how to solve it yet. That doesn&apos;t
              mean it&apos;s not solvable – just neglected.
              <br />
              We&apos;re not asking for permission. We&apos;re resolving it.
            </div>
            <div className="flex items-center gap-6 mt-8 h-6">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }, index) => (
                <Fragment key={href}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={href} target="_blank" rel="noopener noreferrer">
                        <Icon />
                      </Link>
                    </TooltipTrigger>

                    <TooltipContent>{label}</TooltipContent>
                  </Tooltip>
                  {index < SOCIAL_LINKS.length - 1 && <div className="min-w-px h-full bg-primary-foreground" />}
                </Fragment>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-2xl font-bold">TODO: NEWSLETTER</div>
            <div>Subscribe our newsletter to get our latest update & news</div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-start">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          placeholder="Your email address"
                          {...field}
                          className="rounded-l-lg rounded-r-none bg-white/10 border border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-white/60 h-12 px-4 w-full transition-none !shadow-none !ring-0 !outline-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-16 bg-blue-900 h-12 border border-blue-900 rounded -ml-2 hover:bg-blue-800 cursor-pointer"
                  tabIndex={-1}
                >
                  <SendHorizonal className="size-6" />
                </Button>
              </form>
            </Form>
          </div>
        </div>

        <div className="flex items-center gap-2 py-6 border-t">
          <Copyright size={16} />
          {new Date().getFullYear()}{" "}
          <Link href="https://ae.studio/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            AE Studio.
          </Link>
          All rights reserved.
        </div>
      </Section>
    </footer>
  )
}
