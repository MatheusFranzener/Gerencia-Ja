import { GerenciamentoPedidoModule } from './gerenciamento-pedido.module';

describe('GerenciamentoPedidoModule', () => {
  let gerenciamentoPedidoModule: GerenciamentoPedidoModule;

  beforeEach(() => {
    gerenciamentoPedidoModule = new GerenciamentoPedidoModule();
  });

  it('should create an instance', () => {
    expect(gerenciamentoPedidoModule).toBeTruthy();
  });
});
