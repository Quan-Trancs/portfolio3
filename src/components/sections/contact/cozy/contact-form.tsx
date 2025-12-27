'use client';

import { useAction } from 'next-safe-action/hooks';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from '@/components/ui/form';

import { LoaderCircleIcon, CheckCircle2, AlertCircle } from 'lucide-react';
import { contactSubmit } from '@/app/actions';

import { FormError } from '@/components/sections/contact/_components/form-error';
import { FormSuccess } from '@/components/sections/contact/_components/form-success';

import {
  ContactForm as ContactFormType,
  ContactFormSchema
} from '@/lib/validators';
import { cn } from '@/lib/utils';

export default function ContactForm() {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const { execute, result, status } = useAction(contactSubmit);

  const [nameLength, setNameLength] = useState(0);
  const [messageLength, setMessageLength] = useState(0);

  const watchedName = form.watch('name');
  const watchedMessage = form.watch('message');

  useEffect(() => {
    setNameLength(watchedName?.length || 0);
  }, [watchedName]);

  useEffect(() => {
    setMessageLength(watchedMessage?.length || 0);
  }, [watchedMessage]);

  async function onSubmit(values: ContactFormType) {
    // Trim values before submission
    const trimmedValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim()
    };
    execute(trimmedValues);
  }

  // Reset form on successful submission
  useEffect(() => {
    if (result.data?.success) {
      form.reset();
      setNameLength(0);
      setMessageLength(0);
    }
  }, [result.data?.success, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              const hasError = !!form.formState.errors.name;
              const isValid = !hasError && field.value.length >= 2 && field.value.length <= 50;
              
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="John Doe"
                        disabled={status === 'executing'}
                        className={cn(
                          hasError && 'border-destructive',
                          isValid && 'border-green-500 pr-10'
                        )}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setNameLength(e.target.value.length);
                        }}
                      />
                      {isValid && (
                        <CheckCircle2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-500" />
                      )}
                      {hasError && (
                        <AlertCircle className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-destructive" />
                      )}
                    </div>
                  </FormControl>
                  <div className="flex items-center justify-between">
                    <FormMessage />
                    <FormDescription className="text-right text-xs text-muted-foreground">
                      {nameLength}/50
                    </FormDescription>
                  </div>
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              const hasError = !!form.formState.errors.email;
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              const isValid = !hasError && field.value.length > 0 && emailRegex.test(field.value);
              
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="johnDoe@example.com"
                        disabled={status === 'executing'}
                        className={cn(
                          hasError && 'border-destructive',
                          isValid && 'border-green-500 pr-10'
                        )}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e.target.value.toLowerCase());
                        }}
                      />
                      {isValid && (
                        <CheckCircle2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-500" />
                      )}
                      {hasError && (
                        <AlertCircle className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-destructive" />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => {
              const hasError = !!form.formState.errors.message;
              const isValid = !hasError && field.value.length >= 10 && field.value.length <= 500;
              
              return (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Textarea
                        disabled={status === 'executing'}
                        placeholder={
                          'Hello!\n\nThis is John Doe, from Example. Just wanted to say ...'
                        }
                        className={cn(
                          'min-h-[120px] resize-y',
                          hasError && 'border-destructive',
                          isValid && 'border-green-500'
                        )}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setMessageLength(e.target.value.length);
                        }}
                      />
                      {hasError && (
                        <AlertCircle className="absolute right-3 top-3 h-4 w-4 text-destructive" />
                      )}
                    </div>
                  </FormControl>
                  <div className="flex items-center justify-between">
                    <FormMessage />
                    <FormDescription className={cn(
                      'text-right text-xs',
                      messageLength > 500 ? 'text-destructive' : 
                      messageLength >= 10 ? 'text-green-500' : 
                      'text-muted-foreground'
                    )}>
                      {messageLength}/500
                    </FormDescription>
                  </div>
                </FormItem>
              );
            }}
          />

          <FormError message={result.serverError} />
          <FormSuccess message={result.data?.success} />

          <Button
            disabled={status === 'executing' || !form.formState.isValid}
            type="submit"
            className={'w-full'}
          >
            {status === 'executing' && (
              <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />
            )}
            {status === 'executing' ? 'Sending...' : 'Submit'}
          </Button>
      </form>
    </Form>
  );
}
