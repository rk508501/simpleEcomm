import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Home } from 'lucide-react';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    // Get transaction ID from URL params or generate one
    const id = searchParams.get('transactionId') || generateTransactionId();
    setTransactionId(id);
  }, [searchParams]);

  const generateTransactionId = () => {
    return 'TXN-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="text-center">
          <CardHeader className="pb-6">
            <div className="mx-auto mb-4 w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <CardTitle className="text-2xl text-success mb-2">
              Order Confirmed!
            </CardTitle>
            <p className="text-muted-foreground">
              Thank you for your purchase. Your order has been successfully processed.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Transaction ID</p>
              <p className="font-mono text-lg font-semibold">{transactionId}</p>
            </div>
            
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• A confirmation email has been sent to your email address</p>
              <p>• You can track your order using the transaction ID above</p>
              <p>• Your items will be shipped within 2-3 business days</p>
            </div>
            
            <Button 
              onClick={() => navigate('/')} 
              className="w-full mt-6"
              size="lg"
            >
              <Home className="h-4 w-4 mr-2" />
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderConfirmation;