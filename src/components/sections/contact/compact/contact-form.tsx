'use client';

import { useAction } from 'next-safe-action/hooks';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';

import { LoaderCircleIcon } from 'lucide-react';
import { contactSubmit } from '@/app/actions';

import { FormError } from '@/components/sections/contact/_components/form-error';
import { FormSuccess } from '@/components/sections/contact/_components/form-success';

import {
  ContactForm as ContactFormType,
  ContactFormSchema
} from '@/lib/validators';

import {zodResolver} from "@hookform/resolvers/zod";

export default function ContactForm() {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const { execute, result, status } = useAction(contactSubmit);

  async function onSubmit(values: ContactFormType) {
    // Trim values before submission
    const trimmedValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim()
    };
    execute(trimmedValues);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jane Doe"
                    disabled={status === 'executing'}
                    {...field}
                  />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="jane@example.com"
                    disabled={status === 'executing'}
                    {...field}
                  />
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
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={status === 'executing'}
                    placeholder={
                      'Hello!\n\nThis is Jane Doe, from Example. Just wanted to say hi!'
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormError message={result.serverError} />
          <FormSuccess message={result.data?.success} />

          <Button
            disabled={status === 'executing'}
            type="submit"
            className={'w-full'}
          >
            {status === 'executing' && (
              <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />
            )}
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
