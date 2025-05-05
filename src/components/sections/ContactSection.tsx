
"use client"; // Required for form handling

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Use Card for contact options
import { Mail, Linkedin, MessageSquare } from 'lucide-react'; // Using MessageSquare for WhatsApp/general message
import { useToast } from '@/hooks/use-toast';
import { sendContactMessage } from '@/actions/contactActions';
import Link from 'next/link'; // Import Link for social media

// Define Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500, { message: 'Message must be less than 500 characters.'}),
});

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactSectionProps {
  id: string;
}


const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
   const [isSubmitting, setIsSubmitting] = React.useState(false);

  async function onSubmit(values: ContactFormValues) {
     setIsSubmitting(true);
    try {
      const result = await sendContactMessage(values);

       if (result.success) {
        toast({
          title: 'Message Sent!',
          description: 'Thank you for getting in touch. I\'ll reply as soon as possible.',
          variant: 'default',
        });
        form.reset();
      } else {
        toast({
          title: 'Error Sending Message',
          description: result.error || 'An unexpected error occurred. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please check the details or try another method.',
        variant: 'destructive',
      });
    } finally {
       setIsSubmitting(false);
    }
  }

  return (
    <Section id={id} className="bg-background">
      <SectionTitle subtitle="Get In Touch" className="text-foreground">Contact Me</SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Options Column */}
        <div className="lg:col-span-1 space-y-6">
           <Card className="bg-card border-primary/30 shadow-lg hover:shadow-primary/20 transition-all duration-300 text-center p-6 hover:bg-secondary">
             <CardHeader className="p-0 mb-3">
               <Mail className="h-6 w-6 mx-auto text-primary" />
             </CardHeader>
             <CardContent className="p-0">
               <CardTitle className="text-lg font-semibold mb-1 text-foreground">Email</CardTitle>
               <p className="text-sm text-muted-foreground mb-3 break-all">er.adityamewada@gmail.com</p>
               <a href="mailto:er.adityamewada@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                 Send a message
               </a>
             </CardContent>
           </Card>

            <Card className="bg-card border-primary/30 shadow-lg hover:shadow-primary/20 transition-all duration-300 text-center p-6 hover:bg-secondary">
             <CardHeader className="p-0 mb-3">
               <Linkedin className="h-6 w-6 mx-auto text-primary" />
             </CardHeader>
             <CardContent className="p-0">
               <CardTitle className="text-lg font-semibold mb-1 text-foreground">LinkedIn</CardTitle>
               <p className="text-sm text-muted-foreground mb-3">Aditya Mewada</p>
               <a href="https://www.linkedin.com/in/iamadityamewada" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                 Send a message
               </a>
             </CardContent>
           </Card>

            <Card className="bg-card border-primary/30 shadow-lg hover:shadow-primary/20 transition-all duration-300 text-center p-6 hover:bg-secondary">
             <CardHeader className="p-0 mb-3">
               <MessageSquare className="h-6 w-6 mx-auto text-primary" /> {/* Example for WhatsApp */}
             </CardHeader>
             <CardContent className="p-0">
               <CardTitle className="text-lg font-semibold mb-1 text-foreground">WhatsApp</CardTitle>
               <p className="text-sm text-muted-foreground mb-3">+91 81031 01426</p>
               <a href="https://wa.me/918103101426" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                 Send a message
               </a>
             </CardContent>
           </Card>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                     {/* Remove FormLabel for placeholder-only approach */}
                    <FormControl>
                      <Input placeholder="Your Full Name" {...field} className="bg-input border-primary/50 focus:border-primary focus:ring-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="Your Email Address" {...field} className="bg-input border-primary/50 focus:border-primary focus:ring-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Your Message" rows={6} {...field} className="bg-input border-primary/50 focus:border-primary focus:ring-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
