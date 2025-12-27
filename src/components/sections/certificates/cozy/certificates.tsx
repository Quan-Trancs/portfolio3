'use client';
import React from 'react';

import MotionWrap from '@/components/motion-wrap';
import CertificateCard from './certificate-card';

import { certificates } from '@/components/sections/certificates/config';
import TextReveal from '@/components/text-reveal';

function Certificates() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="certificates">
      <div className="px-4 md:px-6">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              <TextReveal>Certifications</TextReveal>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              <TextReveal>
                Professional certifications and credentials that validate my expertise and commitment to continuous learning.
              </TextReveal>
            </p>
          </div>
          <div className="space-y-8">
            {certificates.map((certificate, index) => (
              <CertificateCard
                key={`certificate_${index}`}
                name={certificate.name}
                issuer={certificate.issuer}
                issueDate={certificate.issueDate}
                expirationDate={certificate.expirationDate}
                credentialId={certificate.credentialId}
                credentialUrl={certificate.credentialUrl}
                description={certificate.description}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Certificates;

