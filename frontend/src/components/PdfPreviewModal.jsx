import React, { useState } from 'react';
import { Download, Printer, Share2, X, Check, Eye } from 'lucide-react';

export default function PdfPreviewModal({ pdfBlob, onClose }) {
  const [copied, setCopied] = useState(false);
  const [shareError, setShareError] = useState('');

  if (!pdfBlob) return null;

  const pdfUrl = URL.createObjectURL(pdfBlob);
  const fileName = 'Gobind-Catering-Menu.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.src = pdfUrl;
    document.body.appendChild(iframe);
    iframe.onload = () => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    };
  };

  const handleShare = async () => {
    try {
      setShareError('');
      const file = new File([pdfBlob], fileName, { type: 'application/pdf' });

      // Check if Web Share API with files is supported
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Gobind Catering Menu Requisition',
          text: 'Please find attached the official Gobind Catering requisition menu.',
        });
      } else if (navigator.share) {
        // Fallback Web Share without file
        await navigator.share({
          title: 'Gobind Catering Menu Requisition',
          text: 'Gobind Catering Menu Requisition Sheet',
          url: window.location.href,
        });
      } else {
        // Fallback: trigger download and alert
        handleDownload();
        setShareError('Native file sharing is not supported by your browser. The PDF has been downloaded instead.');
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Error sharing:', err);
        handleDownload();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-5 py-4 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-heading text-lg font-bold text-white tracking-wide">
                Generated Gobind Catering Menu
              </h3>
              <p className="text-xs text-stone-400">
                Official 2-Page Menu Requisition with filled quantities
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
            title="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="px-5 py-3 bg-stone-50 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 font-medium hidden sm:inline">
              Format: 2-Page Original Menu PDF
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm border border-stone-300 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-900 text-amber-400 font-semibold text-sm shadow-sm transition-all"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {shareError && (
          <div className="px-5 py-2 bg-amber-50 text-amber-800 text-xs border-b border-amber-200">
            {shareError}
          </div>
        )}

        {/* PDF Viewer Iframe */}
        <div className="flex-1 bg-stone-200 p-2 sm:p-4 overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0`}
            title="Gobind Catering Menu PDF"
            className="w-full h-full min-h-[450px] sm:min-h-[560px] rounded-lg shadow-inner bg-white border border-stone-300"
          />
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-stone-50 border-t border-stone-200 text-xs text-stone-500 flex items-center justify-between">
          <span>Preserves authentic layout, original Hindi text & Panchkula branch details.</span>
          <button
            onClick={onClose}
            className="font-semibold text-stone-700 hover:text-stone-900"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
