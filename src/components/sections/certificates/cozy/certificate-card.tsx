'use client';
import React, { useState } from 'react';
import { CardContent, Card } from '@/components/ui/card';
import { Award, ExternalLink, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

import { Certificate } from '@/types/certificate';

import { cn } from '@/lib/utils';
import TextReveal from '@/components/text-reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CertificateCardProps extends Certificate {
  className?: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { 
    month: 'long', 
    year: 'numeric' 
  }).format(date);
}

function CertificateCard({
  name,
  issuer,
  issueDate,
  expirationDate,
  credentialId,
  credentialUrl,
  description,
  className
}: CertificateCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Determine if we have expandable content
  const hasExpandableContent = !!(expirationDate || credentialId || description || credentialUrl);
  
  return (
    <Card className={cn('border-none bg-transparent', className)}>
      <CardContent className="p-1">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Award className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h3 className="text-2xl font-semibold flex-1">
                <TextReveal>{name}</TextReveal>
              </h3>
              {credentialUrl && (
                <Button variant="outline" size="sm" asChild className="ml-auto">
                  <Link href={credentialUrl} target="_blank" rel="noopener noreferrer">
                    View Credential
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
            <h4 className="mt-2 text-lg font-medium text-primary">
              <TextReveal>{issuer}</TextReveal>
            </h4>
            <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Issued: {formatDate(issueDate)}</span>
              </div>
            </div>
            
            {/* Expandable content */}
            {isExpanded && hasExpandableContent && (
              <div className="mt-4 space-y-3">
                {expirationDate && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Expires: {formatDate(expirationDate)}</span>
                  </div>
                )}
                {credentialId && (
                  <p className="text-sm text-muted-foreground">
                    Credential ID: <span className="font-mono">{credentialId}</span>
                  </p>
                )}
                {description && (
                  <p className="text-sm text-muted-foreground">
                    <TextReveal>{description}</TextReveal>
                  </p>
                )}
              </div>
            )}
            
            {hasExpandableContent && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-3 text-primary hover:text-primary/80"
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show More <ChevronDown className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            )}
            
            <hr className="my-6 border-t border-border" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CertificateCard;

